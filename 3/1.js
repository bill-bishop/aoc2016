function main(input) {
  return input.split('\n').reduce(function sumValidTriangles(tot, line) {
    let sides = line.trim().split(/\s+/).map(n => Number(n));
    return tot += Number(validTriangle.apply(null, sides));
  }, 0);
}

function validTriangle(a, b, c) {
  return a + b > c &&
    a + c > b &&
    b + c > a;
}

module.exports = main;
