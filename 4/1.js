let _ = require('lodash');

function main (input) {
  let result = 0;

  input.trim().split('\n')
    .forEach((line, i) => {
      let [ encName, secId, checkSum ] = line.match(/(.+)-(\d+)\[(.+?)]/).slice(1);

      let validCheckSum = _(encName)     // like 'aaa-bb-z-y-x'
        .split('')                       // [ 'a', 'a', 'a', 'b', ... ]
        .pullAll('-')
        .groupBy(0)                      // { a: ['a', 'a', 'a' ], b: ['b', ...
        .sortBy(0)                       // sort into list of alphabetic arrays
        .sortBy(o => 0-o.length)         // sort by the length (occurrence of char)
        .map(0)                          // map to first el (remove non-unique)
        .join('')
        .substr(0, 5);

      if (checkSum === validCheckSum) {
        result += Number(secId);
      }
    });

  return result;
}
module.exports = main;