from io import FileIO, SEEK_CUR
import os
import sys
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
        magic = IOHelper.read_utf8_string(io, 4)  # line:21
        if magic == MPK_MAGIC:  # line:22
            version = IOHelper.read_struct(io, '<i')[0]  # line:23
            MPK.printTell(io)  # line:24
            io.seek(4, SEEK_CUR)  # line:25
            MPK.printTell(io)  # line:26
            count = IOHelper.read_struct(io, 'i')[0]  # line:27
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
                with open(arg, 'rb') as io:
                    base_name, _ = os.path.splitext(os.path.basename(arg))  # 获取文件名（不含扩展名）
                    print(f'正在加载：{arg}')
                    mpk = MPK.load(io)  # 加载 MPK 文件；如果 load 方法可能失败，在此处添加错误处理

                    unpack_dir = os.path.join(os.path.dirname(arg), f'{base_name}_unpack')  # 创建解压目录的路径
                    os.makedirs(unpack_dir, exist_ok=True)  # 创建解压目录（如果不存在）

                    for i, file_info in enumerate(mpk.files):  # 使用 enumerate 迭代，获取索引和值
                        offset = file_info.get('offset', 0)  # 安全地获取 offset 值，默认为 0
                        file_name = file_info.get('name', f'unknown_{i}')  # 安全地获取 name 值，默认为 unknown_i

                        if offset != 0:
                            print(f'正在解压：{file_name}')
                            file_path = os.path.join(unpack_dir, file_name)  # 解压后文件的完整路径
                            with open(file_path, 'wb') as outfile:
                                outfile.write(mpk.data(i))  # 写入文件数据；如果数据读取可能失败，在此处添加错误处理

            except (FileNotFoundError, IOError, Exception) as e:  # 捕获更广泛的异常
                print(f"处理 {arg} 时出错：{e}")  # 打印有用的错误信息
# Example usage
if __name__ == "__main__":
    MPK_VERSION = 1 #定义MPK版本号
    main_instance = Main(sys.argv)
    main_instance.run()
    
    
    # 获取要执行的方法名
    print(11111)
