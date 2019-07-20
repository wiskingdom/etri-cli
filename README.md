# etri-cli usage guide

## 1. Install node.js (prerequisite)

### 1-1 On linux

#### 1) Install nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

#### 2) Restart terminal

#### 3) Install node LTS version

```bash
nvm install --lts
```

#### 4) Verify installation

```bash
node -v
npm -v
```

--------------------------

### 1-2 On windows

#### 1) Download LTS version installer

* Download Link: https://nodejs.org

#### 2) Install via the installer

#### 3) Verify installation

```cmd
node -v
npm -v
```
--------------------------

## 2. Install etri-cli package

```bash
npm install etri-cli -g
```
--------------------------

## 3. Usage

```bash
etri [options]
```

### Options

| option  | description    |
|-----------|-------------|
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

--------------------------

## 4. Examples


```bash
etri -k YOURE_API_KEY -i input/sample.txt
```

```bash
etri -k YOURE_API_KEY -i input/sample.txt -c wsd -o result/
```
