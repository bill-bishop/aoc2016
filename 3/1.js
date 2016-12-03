function main(input) {
  let tot = 0;

  input.split('\n').forEach(line => {
    let sides = line.trim().split(/\s+/).map(n => Number(n));
    tot += Number(validTriangle.apply(null, sides));
  });

  return tot;
}

function validTriangle(a, b, c) {
  return a + b > c &&
    a + c > b &&
    b + c > a;
}

module.exports = main;
