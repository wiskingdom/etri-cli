const fs = require('fs');
const path = require('path');
const request = require('request');
const chalk = require('chalk');

module.exports = function({ code, key, input, output }) {
  const OPEN_API_URL = 'http://aiopen.etri.re.kr:8000/WiseNLU';
  const access_key = key;
  const analysisCode = code;
  const input_path = input;
  const output_dir = output;
  const output_file = path.parse(input_path).name + '.json';
  const output_path = path.join(output_dir, output_file);
  const input_text = fs.readFileSync(input_path, 'utf8');

  const requestJson = {
    'access_key': access_key,
    'argument': {
      'text': input_text,
      'analysis_code': analysisCode
    }
  };
  
  const options = {
    url: OPEN_API_URL,
    body: JSON.stringify(requestJson),
    headers: {'Content-Type':'application/json; charset=UTF-8'}
  };
  request.post(options, (error, response, body) => {
    const bodyObj = JSON.parse(body);
    console.log();
    console.log(chalk.green('input: ' + input_path));
    if (response.statusCode === 200) {
      console.log(chalk.blue('  - responseCode: ' + response.statusCode));
    } else {
      console.log(chalk.red('  - responseCode: ' + response.statusCode));
    };

    if (!error) {
      console.log(chalk.blue('  - error: ' + error));
    } else {
      console.log(chalk.red('  - error: ' + error));
    };
    
    if (bodyObj.reason) {
      console.log(chalk.red('  - resultCode: ' + bodyObj.result));
      console.log(chalk.red('  - resultReason: ' + bodyObj.reason));
    } else {
      console.log(chalk.blue('  - resultCode: ' + bodyObj.result));
      fs.writeFileSync(output_path, JSON.stringify(bodyObj, null, 2), 'utf8');
      console.log(chalk.yellow('output: ' + output_path));
    }
  });
};

   