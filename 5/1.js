let _ = require('lodash');
let md5 = require('md5');

function main (input) {
  let result = '', i = 0;

  input = 'ugkcyxxp';

  while (result.length < 8) {
    let [a, b] = hash(input, i);

    console.log('Found', b, a);

    result += a[5].toString();
    i = b;
  }

  return result;
}

function hash(str, i) {
  let result = '';

  while ('00000' !== result.substr(0, 5)) {
    i++;
    result = md5(str + i);

    if (i % (1000 * 1000) === 0) console.log(i, result);
  }

  return [result, i];
}

module.exports = main;