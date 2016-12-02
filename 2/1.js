let nextMoveMap = {
  1: { R: 2, D: 4 },
  2: { R: 3, D: 5, L: 1 },
  3: { D: 6, L: 2 },
  4: { R: 5, D: 7, U: 1 },
  5: { R: 6, D: 8, L: 4, U: 2 },
  6: { D: 9, L: 5, U: 3 },
  7: { R: 8, U: 4 },
  8: { R: 9, L: 7, U: 5 },
  9: { L: 8, U: 6 }
};

function inputCode (instr) {
  let code = ''
  let key = 5;
  instr.split('\n').forEach(line => {
    [].forEach.call(line, ch => {
      let nextMove = nextMoveMap[key][ch];
      key = nextMove || key;
    });
    code += key;
  });
  return code;
}

module.exports = inputCode;
