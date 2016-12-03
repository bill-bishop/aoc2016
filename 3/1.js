let validTriangle = (a,b,c) => (a+b>c) && (b+c>a) && (c+a>b);

function main(input) {
  return input
    .split('\n')
    .map(line => line.trim().split(/\s+/).map(n => Number(n)))
    .reduce(function sumValidTriangles(tot, triangle) {
      return tot += validTriangle(...triangle);
  }, 0);
}

module.exports = main;
