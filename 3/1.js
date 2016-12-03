function main(input) {
  let tot = 0;

  input.split('\n').forEach(line => {
    let sides = line.match(/(\d+)\s+(\d+)\s+(\d+)/);
    if (validTriangle(sides[1], sides[2], sides[3])) tot++;
  });

  return tot;
}

function validTriangle(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);

  return a + b > c &&
    a + c > b &&
    b + c > a;
}

module.exports = main;
