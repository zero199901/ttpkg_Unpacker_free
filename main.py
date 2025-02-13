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

MPK_MAGIC = 'TPKG'
MPK_VERSION = 131072


class MPK:
    def __init__(self, io):
        self._io = io
        self._files = []
        self._version = MPK_VERSION

    @staticmethod
    def printTell(io):
        print(io.tell())

    @staticmethod
    def load(io: FileIO):  # line:19
        instance = MPK(io)  # line:20
        magic = IOHelper.read_utf8_string1(io, 4)  # line:21
        print(magic)
        if magic == MPK_MAGIC:  # line:22
            version = IOHelper.read_struct(io, '<i')[0]  # line:23
            MPK.printTell(io)  # line:24
            io.seek(4, SEEK_CUR)  # line:25 # 将文件指针从当前位置向后移动 4 个字节
            MPK.printTell(io)  # line:26
            count = IOHelper.read_struct(io, 'i')[0]  # line:27
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
                print(file_name)  # line:39
                instance.insert_file({'is_zip': False, 'index': i, 'offset': offset,
                                      'data_size': data_size, 'name': file_name, 'data': None, })  # line:47
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

    def run(self):
        if len(self._args) < 2:
            print("使用方法：python3 main.py <mpk_file1.mpk> <mpk_file2.mpk> ...")
            sys.exit(1)  # 如果没有传入文件路径参数，则打印使用方法并退出程序

        for arg in self._args[1:]:
            try:
                with open(arg, 'rb') as io:  # 以二进制读取模式打开 MPK 文件
                    _, file_arg = os.path.split(arg)
                    print('Loading: %s' % arg)  # 打印正在加载的文件路径
                    mpk = MPK.load(io)  # 加载 MPK 文件，返回 MPK 对象
                    for i in mpk.files:
                        try:
                            # 循环处理 MPK 文件中的每个文件
                            file = mpk.file(i)  # 获取当前文件的信息字典
                            if file['offset'] != 0:
                                # 如果文件的偏移量不为 0，则表示该文件需要解压缩
                                if file['name'] == '':
                                    # 如果文件名为空，则设置为默认值
                                    file['name'] = 'unknown_%s' % i
                                print('Unpacking: %s' %
                                      file['name'])  # 打印当前正在解压缩的文件名
                                # 拼接解压缩后的文件路径
                                path_file = '%s_unpack/%s' % (arg,
                                                              file['name'])
                                dir_file, _ = os.path.split(
                                    path_file)  # 获取文件所在目录路径
                                # 创建目录（如果不存在），存在时不报错
                                os.makedirs(dir_file, exist_ok=True)
                                with open(path_file, 'wb') as io_file:
                                    # 打开解压缩后的文件，以二进制写入模式
                                    # io_file.write(mpk.data(i))  # 写入当前文件的数据到文件中
                                    data = mpk.data(i)
                                    if data:  # Check for data
                                        try:
                                            # Decode bytes to Python object (assuming UTF-8 encoding)
                                            python_object = json.loads(
                                                data.decode('utf-8'))
                                            # Convert to JSON string with indent
                                            json_string = json.dumps(
                                                python_object, indent=4)
                                            # Write as UTF-8 encoded bytes
                                            io_file.write(
                                                json_string.encode('utf-8'))
                                        except (json.JSONDecodeError, UnicodeDecodeError) as e:
                                            print(
                                                f"Error processing data for file '{file['name']}': {e}. Writing raw bytes.")
                                            io_file.write(data)
                                    else:
                                        print(
                                            f"Warning: No data found for file '{file['name']}'. Skipping.")
                        # 捕获 FileNotFoundError, IOError 和其他异常
                        except (FileNotFoundError, IOError, Exception) as e:
                            # 打印错误信息，并继续处理下一个文件
                            print(f"处理 MPK 文件11 '{arg}' 时出错：{e}")
                            continue
            # 捕获 FileNotFoundError, IOError 和其他异常
            except (FileNotFoundError, IOError, Exception) as e:
                print(f"处理 MPK 文件22 '{arg}' 时出错：{e}")  # 打印错误信息，并继续处理下一个文件
# Example usage
if __name__ == "__main__":
    MPK_VERSION = 1  # 定义MPK版本号
    main_instance = Main(sys.argv)
    main_instance.run()

    # 获取要执行的方法名
    print(11111)
