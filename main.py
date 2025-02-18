import binascii
from io import FileIO, SEEK_CUR
import json
import os
import random
import re
import string
import struct
import sys
from time import sleep
from util.io_helper import IOHelper
from datetime import datetime

MPK_MAGIC = 'TPKG'
MPK_VERSION = 131072


class MPK:
    def __init__(self, io):
        self._io = io
        self._files = []
        self._version = MPK_VERSION
        self._logger = self._setup_logger()  # 添加日志记录器

    def _setup_logger(self):
        """设置日志记录器，同时输出到控制台和文件"""
        import logging
        from logging.handlers import RotatingFileHandler
        import os
        
        # 创建 logs 目录
        if not os.path.exists('logs'):
            os.makedirs('logs')
        
        logger = logging.getLogger('MPK')
        logger.setLevel(logging.INFO)
        
        # 设置日志格式
        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s',
            datefmt='%Y-%m-%d %H:%M:%S'
        )
        
        # 控制台处理器
        console_handler = logging.StreamHandler()
        console_handler.setLevel(logging.INFO)
        console_handler.setFormatter(formatter)
        
        # 文件处理器（按日期切分）
        log_file = os.path.join('logs', 'mpk_unpacker.log')
        file_handler = RotatingFileHandler(
            log_file,
            maxBytes=10*1024*1024,  # 10MB
            backupCount=5,
            encoding='utf-8'
        )
        file_handler.setLevel(logging.DEBUG)  # 文件记录更详细的日志
        file_handler.setFormatter(formatter)
        
        # 添加处理器
        logger.addHandler(console_handler)
        logger.addHandler(file_handler)
        
        return logger

    @staticmethod
    def printTell(io):
        print(io.tell())

    @staticmethod
    def load(io: FileIO):  # line:19
        instance = MPK(io)  # line:20
        magic = IOHelper.read_utf8_string1(io, 4)  # line:21
        instance._logger.info(f"Magic: {magic}")  # 使用日志替代print
        
        if magic != MPK_MAGIC:
            raise ValueError(f"Invalid MPK magic: {magic}")
            
        version = IOHelper.read_struct(io, '<i')[0]  # line:23
        MPK.printTell(io)  # line:24
        io.seek(4, SEEK_CUR)  # line:25 # 将文件指针从当前位置向后移动 4 个字节
        MPK.printTell(io)  # line:26
        count = IOHelper.read_struct(io, 'i')[0]  # line:27
        instance._logger.info(f"File count: {count}")
        print('count', count)
        instance.set_version(version)  # line:29
        for i in range(count):  # line:30
            size = 'i'  # line:31
            name_length = IOHelper.read_struct(io, size)[0]  # line:32
            file_data = IOHelper.read_struct(
                io, '<'+str(name_length)+'s')[0]  # line:35
            file_name = bytes(file_data).decode(
                encoding='utf-8')  # line:36
            offset = IOHelper.read_struct(io, '=i')[0]  # line:37
            data_size = IOHelper.read_struct(io, '=i')[0]  # line:38
            instance._logger.info(f"Processing file: {file_name}")
            print(file_name)  # line:39
            file_info = {
                'is_zip': False,
                'index': i,
                'offset': offset,
                'data_size': data_size,
                'name': file_name,
                'data': None,
            }
            instance.insert_file(file_info)  # line:47
        return instance  # line:49

    def set_version(self, version):
        self._version = version

    def insert_file(self, file, index=None):
        i = 0
        if index is None:
            i = len(self._files)
        self._files.insert(i, file)

    def data(self, index):
        if index < len(self._files):
            file = self._files[index]  # type: dict
            if file['data'] is None:
                if not file['is_zip']:
                    data = IOHelper.read_range(
                        self._io, file['offset'], file['data_size'])
                    file['data'] = data
                else:
                    raise Exception('Unsupport File.')
            else:
                data = file['data']

            return data

    def file(self, index):
        if index < len(self._files):
            file = self._files[index].copy()
            file.pop('data')
            return file

    @property
    def files(self):
        return [i for i in range(len(self._files))]



class Main:
    def __init__(self, args):
        self._args = args  # 命令行参数
        self._logger = self._setup_logger()

    def _setup_logger(self):
        """设置日志记录器，同时输出到控制台和文件"""
        import logging
        from logging.handlers import RotatingFileHandler
        import os
        
        # 创建 logs 目录
        if not os.path.exists('logs'):
            os.makedirs('logs')
        
        logger = logging.getLogger('Main')
        logger.setLevel(logging.INFO)
        
        # 设置日志格式
        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s',
            datefmt='%Y-%m-%d %H:%M:%S'
        )
        
        # 控制台处理器
        console_handler = logging.StreamHandler()
        console_handler.setLevel(logging.INFO)
        console_handler.setFormatter(formatter)
        
        # 文件处理器（按日期切分）
        log_file = os.path.join('logs', 'mpk_unpacker.log')
        file_handler = RotatingFileHandler(
            log_file,
            maxBytes=10*1024*1024,  # 10MB
            backupCount=5,
            encoding='utf-8'
        )
        file_handler.setLevel(logging.DEBUG)  # 文件记录更详细的日志
        file_handler.setFormatter(formatter)
        
        # 添加处理器
        logger.addHandler(console_handler)
        logger.addHandler(file_handler)
        
        return logger

    def process_file(self, mpk, file_info, output_path):
        """处理单个MPK文件中的文件"""
        if file_info['offset'] == 0 or not file_info['name']:
            return

        file_info['name'] = file_info['name'] or f'unknown_{file_info["index"]}'
        self._logger.info(f'Unpacking: {file_info["name"]}')
        
        path_file = os.path.join(f'{output_path}_unpack', file_info['name'])
        os.makedirs(os.path.dirname(path_file), exist_ok=True)
        
        data = mpk.data(file_info['index'])
        if not data:
            self._logger.warning(f"No data found for file '{file_info['name']}'. Skipping.")
            return

        self.write_file_data(path_file, data, file_info['name'])

    def write_file_data(self, path_file, data, filename):
        """写入文件数据，支持多种格式化处理"""
        try:
            import jsbeautifier  # 首先需要安装: pip install jsbeautifier
            
            os.makedirs(os.path.dirname(path_file), exist_ok=True)
            _, ext = os.path.splitext(filename.lower())
            
            with open(path_file, 'wb') as io_file:
                if ext == '.js':
                    try:
                        content = data.decode('utf-8')
                        
                        # 变量名映射表
                        var_mapping = {
                            't': 'module',
                            'e': 'exports',
                            'n': 'require',
                            'r': 'Promise',
                            'o': 'setTimeout',
                            'i': 'clearTimeout',
                            'a': 'setInterval',
                            's': 'clearInterval',
                            'u': 'reject',
                            'f': 'resolve',
                            'l': 'window',
                            'p': 'document',
                            'h': 'location',
                            'd': 'navigator',
                            'v': 'history',
                            'g': 'screen',
                            '_': 'utils',
                            'y': 'config',
                            'm': 'data',
                            'b': 'state',
                            'w': 'options',
                            'k': 'event',
                            'S': 'handler',
                            'x': 'callback',
                            'C': 'response',
                            'O': 'request',
                            'A': 'params',
                            'I': 'result',
                            'P': 'error',
                            'j': 'success',
                            'E': 'status',
                            'B': 'message',
                            'D': 'token',
                            'R': 'user',
                            'L': 'store',
                            'T': 'action',
                            'M': 'mutation',
                            'H': 'getter',
                        }
                        
                        # 函数名映射表
                        func_mapping = {
                            'G': 'getType',
                            'B': 'bindProps',
                            'q': 'queryData',
                            'F': 'formatData',
                            'z': 'initialize',
                            'Q': 'handleQueue',
                            'Y': 'processEvent',
                            'W': 'watchChanges',
                            'X': 'transformData',
                            'K': 'createStore',
                            'J': 'jsonParse',
                            'V': 'validateData',
                            'Z': 'setupConfig',
                        }
                        
                        # 替换变量名和函数名
                        for old_name, new_name in {**var_mapping, **func_mapping}.items():
                            # 使用正则表达式确保只替换独立的标识符
                            content = re.sub(r'\b' + re.escape(old_name) + r'\b', new_name, content)
                        
                        # 使用 jsbeautifier 格式化 JS 代码
                        opts = jsbeautifier.default_options()
                        opts.indent_size = 2
                        opts.indent_char = ' '
                        opts.preserve_newlines = True
                        opts.keep_array_indentation = False
                        opts.break_chained_methods = False
                        opts.indent_scripts = "normal"
                        opts.space_after_anon_function = True
                        opts.keep_function_indentation = False
                        opts.end_with_newline = True
                        
                        beautified_content = jsbeautifier.beautify(content, opts)
                        
                        # 添加文件头注释
                        header_comment = (
                            "/**\n"
                            " * 反编译并格式化的 JS 文件\n"
                            " * 原始文件: {}\n"
                            " * 处理时间: {}\n"
                            " */\n\n"
                        ).format(filename, datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
                        
                        final_content = header_comment + beautified_content
                        io_file.write(final_content.encode('utf-8'))
                        self._logger.info(f"成功格式化并还原变量名: {filename}")
                        
                    except UnicodeDecodeError:
                        self._logger.warning(f"无法解码 JS 文件: {filename}")
                        io_file.write(data)
                        
                elif ext == '.json':
                    try:
                        content = data.decode('utf-8')
                        parsed = json.loads(content)
                        formatted_content = json.dumps(parsed, indent=2, ensure_ascii=False)
                        io_file.write(formatted_content.encode('utf-8'))
                    except (UnicodeDecodeError, json.JSONDecodeError):
                        self._logger.warning(f"无法解析 JSON 文件: {filename}")
                        io_file.write(data)
                else:
                    # 其他类型文件直接写入
                    io_file.write(data)
                
        except IOError as e:
            self._logger.error(f"写入文件 '{filename}' 时出错：{e}")
        except ImportError:
            self._logger.error("请先安装 jsbeautifier: pip install jsbeautifier")
            # 如果没有安装 jsbeautifier，仍然写入文件，但不进行格式化
            with open(path_file, 'wb') as io_file:
                io_file.write(data)

    def run(self):
        if len(self._args) < 2:
            self._logger.error("使用方法：python3 main.py <mpk_file1.mpk> <mpk_file2.mpk> ...")
            sys.exit(1)  # 如果没有传入文件路径参数，则打印使用方法并退出程序

        for arg in self._args[1:]:
            try:
                with open(arg, 'rb') as io:  # 以二进制读取模式打开 MPK 文件
                    self._logger.info(f'Loading: {arg}')  # 打印正在加载的文件路径
                    mpk = MPK.load(io)  # 加载 MPK 文件，返回 MPK 对象
                    for i in mpk.files:
                        try:
                            # 循环处理 MPK 文件中的每个文件
                            file_info = mpk.file(i)  # 获取当前文件的信息字典
                            self.process_file(mpk, file_info, arg)
                        except Exception as e:
                            self._logger.error(f"处理文件 '{file_info.get('name', f'index_{i}')}' 时出错：{e}")
                            continue
            except Exception as e:
                self._logger.error(f"处理 MPK 文件 '{arg}' 时出错：{e}")  # 打印错误信息，并继续处理下一个文件
# Example usage
if __name__ == "__main__":
    MPK_VERSION = 1  # 定义MPK版本号
    main_instance = Main(sys.argv)
    main_instance.run()

    # 获取要执行的方法名
    print('执行成功')
