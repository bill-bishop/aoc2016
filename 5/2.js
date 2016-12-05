let _ = require('lodash');
let md5 = require('md5');

function main (input) {
  let result = [ 'f', '2', 'c', , '3', '0', 'e', '5' ], i = 15000000;

  input = 'ugkcyxxp';

  while (result.join('').length < 8) {
    let [a, b, c, d] = hash(input, i);

    if (result[b] !== a)
      console.log('Added', result, d);

    result[b] = result[b] || a;
    i = c;
  }

  return result.join('');
}

function hash(str, i) {
  let result = '';

  while ('00000' !== result.substr(0, 5) || !/[0-7]/.test(result[5])) {
    i++;
    result = md5(str + i);

    if (i % (1000 * 1000) === 0) console.log(i, result);
  }

  let pos = Number(result[5]);
  let ch = result[6];

  return [ch, pos, i, result];
}

module.exports = main;