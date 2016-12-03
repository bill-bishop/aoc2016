function main(input) {
  return input
    .split('\n')
    .map(line => line.trim().split(/\s+/).map(n => Number(n)))
    .reduce(function sumValidTriangles(tot, triangle) {
      return tot += validTriangle.apply(null, triangle);
  }, 0);
}

function validTriangle(a, b, c) {
  return a + b > c &&
    a + c > b &&
    b + c > a;
}

module.exports = main;
