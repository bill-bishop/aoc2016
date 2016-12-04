function main (input) {
  let result;

  input.trim().split('\n')
    .forEach((line, i) => {
      let [ _, encName, secId, checkSum ] = line.match(/(.+)-(\d+)\[(.+?)]/);

      let decName = encName.split('')
        .map(ch => shiftChar(ch, secId)).join('');

      if (/north ?pole/i.test(decName)) {
        result = secId;
      }
    });

  return result;
}

let alph = 'abcdefghijklmnopqrstuvwxyz'.split('');

function shiftChar (ch, n) {
  if (ch === '-') return ' ';
  let i = (alph.indexOf(ch) + Number(n)) % alph.length;
  return alph[i];
}

module.exports = main;