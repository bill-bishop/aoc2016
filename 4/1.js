function main (input) {
  let result = 0;

  input.trim().split('\n')
    .forEach((line, i) => {
      let [ _, encName, secId, checkSum ] = line.match(/(.+)-(\d+)\[(.+?)]/);

      if (fiveHighestChars(encName) === checkSum) {
        result += Number(secId);
      }
    });

  return result;
}

function fiveHighestChars (str) {
  let fqMap = frequencyMap(str);

  str = str
      .replace(/-/g, '')
      .split('')
      .sort((a,b) => {
        let fq = fqMap[a] - fqMap[b];
      
        // sort the string by the frequency map & alphabetically for ties
        return fq > 0 ? -1 : 
               fq < 0 ?  1 : 
               a  < b ? -1 : 1;
      }).join('');

  // strip non-unique;
  str = str.replace(/(.)\1+/g, '$1');
  return str.substr(0, 5);
}

function frequencyMap (str) {
  let map = {};

  str.split('').forEach(ch => {
    if (ch === '-') return;
    map[ch] = map[ch] || 0;
    map[ch] += 1;
  });

  return map;
}

module.exports = main;