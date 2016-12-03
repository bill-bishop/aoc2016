let assert   = require('assert');

validate(
  1, 2, 'R8, R4, R4, R8', 4
);

validate(
  2,
  1,
  `ULL
  RRDDD
  LURDL
  UUUUD`,
  1985
);

validate(
  2,
  1,
  `UUUUU
  LLLLLLLL
  DDRR
  LURUL`,
  2192
);

validate(
  2,
  1,
  `L
  U
  DD
  UR
  U
  L
  RR
  LDR
  UDD
  ULD
  L`,
  41752136987
);

validate(
  2,
  1,
  `UUUUU
  LLLLLLUUUULLL
  DLLLL
  DLLLLLLDDDDDLLLL
  RDDD
  RDDDDRRRDDDD
  URRRRR
  URRRRUUUURRR
  LUUUUU`,
  214789632
);

validate(
  3,
  1,
  `1 2 3
2 3 4`,
  1
);

validate(
  3,
  2,
  `2  1  4
   3  2  5
   4  3  6
   4  3  6
   4  3  6
   4  3  6
   `,
   5
);

function validate (day, part, input, expectation) {
  let desc    = `Day #${day}, Pt ${part}`;
  let should  = `${input} -> ${expectation}`;

  describe(desc, function () {
    it(should, function () {
      let program = require(`../${day}/${part}`);
      assert.equal(program(input), expectation);
    });
  });
}
