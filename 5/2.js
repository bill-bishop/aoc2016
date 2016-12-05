let _ = require('lodash');
let md5 = require('md5');

function main (input) {
  let result = [], i = 0;

  input = 'ugkcyxxp';

  while (result.join('').length < 8) {
    let hash = md5(`${input}${i}`);
    let nextCh = '00000' === hash.substr(0, 5)
              && /[0-7]/.test(hash[5])
              && typeof result[hash[5]] === 'undefined';

    if (nextCh) {
      result[hash[5]] = hash[6];
      console.log('Found', result, hash);
    }

    i++;
  }

  return result;
}

module.exports = main;