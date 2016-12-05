let _ = require('lodash');
let md5 = require('md5');

function main (input) {
  let result = '', i = 0;

  input = 'ugkcyxxp';

  while (result.length < 8) {
    let h = md5(`${input}${i}`);

    if ('00000' === h.substr(0, 5)) {
      result += h[5].toString();
      console.log('Found', result);
    }

    i++;
  }

  return result;
}

module.exports = main;