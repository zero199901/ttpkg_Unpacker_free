import struct
import sys

from util import common


class IOHelper:
    @staticmethod
    def read_struct(io, fmt, zfill=True):
        """
        从二进制流 `io` 中读取结构化数据，并根据需要进行补零操作。

        Args:
            io: 二进制数据流 (例如文件对象或字节流)。
            fmt: struct 模块的格式字符串，定义数据结构 (例如: '<I' 表示一个 4 字节的小端序无符号整数)。
            zfill: 布尔值，指示是否进行补零操作。如果为 True (默认值)，则在读取的数据不足时进行补零；如果为 False，则在读取的数据不足时返回 None。

        Returns:
            一个元组，包含解包后的数据。如果读取失败或数据长度不足 (且 zfill 为 False)，则返回 None。
        """
        struct_size = struct.calcsize(fmt)  # 计算根据格式字符串 fmt 指定的结构体的大小 (以字节为单位)
        data = io.read(struct_size)  # 从 io 读取 struct_size 个字节的数据

        if zfill:  # 如果需要进行补零操作 (zfill 为 True)
            data = common.zfill_bytes(data, struct_size)  # 使用 common.zfill_bytes 函数对读取的数据进行补零，使其长度达到 struct_size 字节。 (假设 common 模块已定义该函数)
        elif len(data) == 0:  # 如果读取的数据长度为 0 (表示读取失败)
            return None  # 返回 None

        try:
            result = struct.unpack(fmt, data)  # 使用 struct.unpack 函数根据格式字符串 fmt 解包读取到的二进制数据
            return result  # 返回解包后的数据 (一个元组)
        except struct.error as e:
            print(f"Error unpacking data: {e}") #打印解包错误信息，用于调试
            return None #返回None表示解包失败



    @staticmethod
    def read_ascii_string(io, max_size=-1, ignore_zero=False):
        result = ''
        zero_break = not ignore_zero and max_size != -1

        while max_size == -1 or len(result) < max_size:
            [char] = IOHelper.read_struct(io, 'B')
            if char == 0 and zero_break:
                break

            result += chr(char)
        return result

    @staticmethod
    def read_range(io, offset=0, size=-1):
        io.seek(offset)
        return io.read(size)

    @staticmethod
    def write_struct(io, fmt, *values):
        data = struct.pack(fmt, *values)
        return io.write(data)

    @staticmethod
    def write_ascii_string(io, content: str):
        data = content.encode('ascii') + b'\x00'
        return io.write(data)

    @staticmethod  # line:33
    def read_utf8_string(io, max_size=-1, ignore_zero=False):  # line:34
        result = ''  # line:35
        zero_break = not ignore_zero and max_size != -1  # line:36
        while max_size == -1 or len(result) < max_size:  # line:38
            [char] = IOHelper.read_struct(io, 'B')  # line:39
            if char == 0 and zero_break:  # line:40
                break  # line:41
            if char & 0x80 == 0:  # line:43
                O0O0O00O00OO0O00O = char  # line:44
                OO0O00OOOOOOOOO00 = 1  # line:45
            elif char & 0xE0 == 0xC0:  # line:46
                O0O0O00O00OO0O00O = char & 0x1F  # line:47
                OO0O00OOOOOOOOO00 = 2  # line:48
            elif char & 0xF0 == 0xE0:  # line:49
                O0O0O00O00OO0O00O = char & 0x0F  # line:50
                OO0O00OOOOOOOOO00 = 3  # line:51
            elif char & 0xF8 == 0xF0:  # line:52
                O0O0O00O00OO0O00O = char & 0x07  # line:53
                OO0O00OOOOOOOOO00 = 4  # line:54
            else:  # line:55
                raise ValueError("Invalid UTF-8 character")  # line:57
            for _OO0OO000000OO00O0 in range(OO0O00OOOOOOOOO00 - 1):  # line:59
                [O0O0O00O00OO0O0OO] = IOHelper .read_struct(io, 'B')  # line:60
                if not (O0O0O00O00OO0O0OO & 0xC0 == 0x80):  # line:61
                    raise ValueError("Invalid UTF-8 character")  # line:62
                O0O0O00O00OO0O00O = (O0O0O00O00OO0O00O << 6) | (
                    O0O0O00O00OO0O0OO & 0x3F)  # line:64
            result += chr(O0O0O00O00OO0O00O)  # line:66
        return result  # line:68

    def read_utf8_string1(io, max_size=-1, ignore_zero=False):
        """
        从IO流中读取UTF-8编码的字符串。

        Args:
            io: IO流对象。
            max_size: 最大读取字节数，-1表示读取到字符串结尾。
            ignore_zero: 是否忽略零字节作为字符串结尾标志。

        Returns:
            读取到的UTF-8字符串。

        Raises:
            ValueError: UTF-8字符无效。
        """
        result = ''  # 用于存储读取到的字符串
        zero_break = not ignore_zero and max_size != -1  # 是否以零字节作为字符串结尾，并且设置了最大读取字节数
        while max_size == -1 or len(result) < max_size:  # 循环读取直到达到最大字节数或字符串结尾
            [char] = IOHelper.read_struct(io, 'B')  # 读取一个字节
            if char == 0 and zero_break:  # 如果读取到零字节且不忽略零字节作为结尾
                break  # 退出循环
            # 根据UTF-8编码规则判断字符的字节数
            if char & 0x80 == 0:  # 单字节字符
                code_point = char  # 字符的代码点
                byte_count = 1  # 字节数
            elif char & 0xE0 == 0xC0:  # 双字节字符
                code_point = char & 0x1F  # 字符的代码点
                byte_count = 2  # 字节数
            elif char & 0xF0 == 0xE0:  # 三字节字符
                code_point = char & 0x0F  # 字符的代码点
                byte_count = 3  # 字节数
            elif char & 0xF8 == 0xF0:  # 四字节字符
                code_point = char & 0x07  # 字符的代码点
                byte_count = 4  # 字节数
            else:  # 其他情况为无效UTF-8字符
                raise ValueError("Invalid UTF-8 character")  # 抛出异常

            # 读取剩余字节并组合成代码点
            for _ in range(byte_count - 1):  # 循环读取剩余字节
                [next_byte] = IOHelper.read_struct(io, 'B')  # 读取一个字节
                if not (next_byte & 0xC0 == 0x80):  # 检查是否为后续字节
                    raise ValueError("Invalid UTF-8 character")  # 抛出异常
                code_point = (code_point << 6) | (next_byte & 0x3F)  # 组合成代码点

            result += chr(code_point)  # 将代码点转换为字符并添加到结果字符串中
        return result  # 返回读取到的字符串


    def write_utf8_string(OO000O0OO000OOO00, OO00O00O0OO0O0O0O: str):  # line:86
        OO00O00O0OO0OOO0O = b''  # line:87
        for O000000O0OOO000O0 in OO00O00O0OO0O0O0O:  # line:89
            O0OOO0OO000000OOO = ord(O000000O0OOO000O0)  # line:90
            if O0OOO0OO000000OOO < 0x80:  # line:91
                # line:92
                OO00O00O0OO0OOO0O += O0OOO0OO000000OOO .to_bytes(1, 'big')
            elif O0OOO0OO000000OOO < 0x800:  # line:93
                OO00O00O0OO0OOO0O += ((O0OOO0OO000000OOO >> 6)
                                      | 0xC0).to_bytes(1, 'big')  # line:94
                OO00O00O0OO0OOO0O += ((O0OOO0OO000000OOO & 0x3F)
                                      | 0x80).to_bytes(1, 'big')  # line:95
            elif O0OOO0OO000000OOO < 0x10000:  # line:96
                OO00O00O0OO0OOO0O += ((O0OOO0OO000000OOO >> 12)
                                      | 0xE0).to_bytes(1, 'big')  # line:97
                OO00O00O0OO0OOO0O += (((O0OOO0OO000000OOO >> 6) & 0x3F)
                                      | 0x80).to_bytes(1, 'big')  # line:98
                OO00O00O0OO0OOO0O += ((O0OOO0OO000000OOO & 0x3F)
                                      | 0x80).to_bytes(1, 'big')  # line:99
            elif O0OOO0OO000000OOO < 0x110000:  # line:100
                OO00O00O0OO0OOO0O += ((O0OOO0OO000000OOO >> 18)
                                      | 0xF0).to_bytes(1, 'big')  # line:101
                OO00O00O0OO0OOO0O += (((O0OOO0OO000000OOO >> 12) & 0x3F)
                                      | 0x80).to_bytes(1, 'big')  # line:102
                OO00O00O0OO0OOO0O += (((O0OOO0OO000000OOO >> 6) & 0x3F)
                                      | 0x80).to_bytes(1, 'big')  # line:103
                OO00O00O0OO0OOO0O += ((O0OOO0OO000000OOO & 0x3F)
                                      | 0x80).to_bytes(1, 'big')  # line:104
            else:  # line:105
                raise ValueError("Invalid Unicode character")  # line:107
        return OO000O0OO000OOO00 .write(OO00O00O0OO0OOO0O)
