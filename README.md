# etri-cli

## Install node.js and npm (prerequisite)

### on linux

1. Install nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

1. Restart terminal

2. Install node lts version

```bash
nvm install --lts
```

3. Verify installation

```bash
node -v
npm -v
```

### on windows

1. Download LTS version installer Link: https://nodejs.org

2. Install via the installer

3. Verify installation

```cmd
node -v
npm -v
```

## Install etri-cli

```bash
npm install etri-cli -g
```

## Usage

```bash
etri [options]
```

### Options

| option      | description                |
|-----------------------------|---------------------------------------------------------------|
| -k, --key [api_key ]        | set an auth key for ETRI OPEN API (required) 
| -c, --code [analysis_code ] | set an analysis code (default: morp)                          |
| -i, --input [file_path ]    | set an input text file path (required)                        |
| -o, --output [dir_path ]    | set a directory path for analyzed output (default: ./output/) |
| -h, --help                  | output usage information                                      |

### Analysis Code

| code | analysis type |
|-------|---------|
|morp|POS|
|wsd|word meaning (homonym)|
|wsd_poly|word meaning (polysemy)|
|ner|entity name|
|dparse|syntactic dependency|
|srl|semantic role|

## Examples

```bash
etri -k YOURE_API_KEY -i input/sample.txt
```

```bash
etri -k YOURE_API_KEY -i input/sample.txt -c wsd -o result/
```
