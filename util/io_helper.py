import struct
import sys

from util import common


class IOHelper:
    @staticmethod
    def read_struct(io, fmt, zfill=True):  # line:8
        struct_size = struct.calcsize(fmt)  # line:9
        data = io.read(struct_size)  # line:10
        if zfill:  # line:12
            data = common.zfill_bytes(data, struct_size)  # line:13
        elif len(data) == 0:  # line:14
            return None  # line:15
        result = struct.unpack(fmt, data)  # line:17
        return result  # line:18

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
