let assert   = require('assert');

validate(1, 2, 'R8, R4, R4, R8', 4);

function validate (day, part, input, expectation) {
  describe(`Day #${day}, Pt ${part}`, function () {
    it(`should have correct output for: ${input}`, function () {
      assert.equal(require(`../${day}/${part}`)(input), expectation);
    });
  });
}
