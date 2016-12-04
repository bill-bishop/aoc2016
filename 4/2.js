let _ = require('lodash');
let alph = _.range(97, 123).map(n => String.fromCharCode(n));

function main (input) {
  let result;

  _(input).trim().split(/\n/)
    .forEach((line, i) => {
      let [ encName, secId, checkSum ] = line.match(/(.+)-(\d+)\[(.+?)]/).slice(1);
      let decName = _(encName)
        .map(ch => ch == '-' ? ' ' : alph[(alph.indexOf(ch) + Number(secId)) % 26])
        .join('');

      if (/northpole/.test(decName)) result = secId;
    });

  return result;
}

module.exports = main;