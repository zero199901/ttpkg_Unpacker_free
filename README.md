# ttpkgUnpacker

# MPK 文件解包工具

一个用于解包和格式化 MPK 文件的 Python 工具，支持自动格式化 JavaScript、JSON 等文件。

## 功能特点

- 支持 MPK 文件的解包
- 自动格式化 JavaScript 代码
- 支持 JSON 文件美化
- 详细的日志输出
- 错误处理和恢复机制

## 安装

1. 确保安装 Python 3.6+
2. 安装依赖：

## 创建虚拟环境（推荐）：

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

3. 安装依赖：
```bash
pip install -r requirements.txt
```

## 注意事项

- 建议在处理前备份原始文件
- 大文件处理可能需要较长时间
- 确保有足够的磁盘空间
- 建议在虚拟环境中运行程序

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

### 输出说明

- 程序会为每个 MPK 文件创建一个 `{文件名}_unpack` 目录
- 解包的文件会保持原有的目录结构
- JavaScript 和 JSON 文件会自动格式化
- 其他类型文件会保持原样

### 日志输出

程序运行时会输出详细的日志信息，包括：
- 文件处理进度
- 格式化状态
- 错误警告信息

## 常见问题

1. 如果遇到 "请先安装 jsbeautifier" 错误：

```bash
pip install jsbeautifier
```

2. 如果遇到文件权限问题：
   - 确保对输出目录有写入权限
   - 在 Linux/Mac 上可能需要使用 sudo

3. 如果遇到内存问题：
   - 建议每次处理较少的文件
   - 确保系统有足够的可用内存

4. 如果遇到 Python 版本问题：
   - 确保使用 Python 3.6 或更高版本
   - 可以使用 `python --version` 检查版本

## 开发环境设置

1. 克隆仓库：
```bash
git clone <repository-url>
cd mpk-unpacker
```

2. 创建虚拟环境（推荐）：
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

3. 安装依赖：
```bash
pip install -r requirements.txt
```