# etri-cli

## Project setup
```
npm install etri-cli -g
```

## Usage
Usage: etri [options]

Options:
  -k, --key [api_key]         set an auth key for ETRI OPEN API (required)
  -c, --code [analysis_code]  set an analysis code
                               (default: morp)
                                - morp: 형태
                                - wsd: 어휘의미(동음이의)
                                - wsd_poly: 어휘의미(다의)
                                - ner: 개체명
                                - dparse: 구문
                                - srl: 의미역
  -i, --input [file_path]     set an input text file path (required)
  -o, --output [dir_path]     set a directory path for analyzed output
                                (default: ./output/)
  -h, --help                  output usage information
