let _ = require('lodash');

function main (input) {
  let result = 0;

  input.trim().split('\n')
    .forEach((line, i) => {
      let [ encName, secId, checkSum ] = line.match(/(.+)-(\d+)\[(.+?)]/).slice(1);

      let validCheckSum = _.chain(encName.replace(/-/g, '').split(''))
        .groupBy(0)
        .sortBy(0)
        .sortBy(o => 0-o.length)
        .map(0)
        .join('')
        .value()
        .substr(0, 5);

      console.log(`${encName}, ${secId}, ${checkSum}, ${validCheckSum}`);

      if (checkSum === validCheckSum) {
        result += Number(secId);
      }
    });

  return result;
}
module.exports = main;