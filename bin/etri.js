#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const etriapi = require('../lib/etriapi');
const chalk = require('chalk');

const lf = '\t\t\t      '
const blf = lf + '  - '

program
  .option('-k, --key [api_key]', 'set an auth key for ETRI OPEN API (required)')
  .option('-c, --code [analysis_code]', `set an analysis code
    ${lf} (default: morp)
    ${blf}morp: 형태
    ${blf}wsd: 어휘의미(동음이의)
    ${blf}wsd_poly: 어휘의미(다의)
    ${blf}ner: 개체명
    ${blf}dparse: 구문
    ${blf}srl: 의미역`)
  .option('-i, --input [file_path]', 'set an input text file path (required)')
  .option('-o, --output [dir_path]', `set a directory path for analyzed output
    ${lf}  (default: ./output/)`)
  .parse(process.argv);

if (!program.code) {
  program.code = 'morp';
}
if (!program.output) {
  program.output = path.normalize('./output/');
}

if (!program.key) {
  program.key = '';
  console.error(chalk.red('Error: option \'-k, --key\' is required'));
  console.log(chalk.blue('usage info can be viewed via: etri --help'));
  process.exit();
}
if (!program.input) {
  program.input = '';
  console.error(chalk.red('Error: option \'-i, --input\' is required'));
  console.log(chalk.blue('usage info can be viewed via: etri --help'));
  process.exit();
}

program.input = path.normalize(program.input);

const { code, input, output, key } = program;

if (!fs.existsSync(output)) {
  fs.mkdirSync(output);
};

etriapi({ code, input, output, key });


