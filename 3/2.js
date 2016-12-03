let t1 = [],
  t2 = [],
  t3 = [];

function main(input) {
  let tot = 0;

  input.split('\n').forEach((line, i) => {
    let sides = line.match(/(\d+)\s+(\d+)\s+(\d+)/);

    if (!sides) { return; }

    t1.push(sides[1]);
    t2.push(sides[2]);
    t3.push(sides[3]);

    if (t1.length === 3) {
      [t1, t2, t3].forEach(triangle => {
        if (validTriangle.apply(null, triangle)) tot++;
      });

      t1.length = t2.length = t3.length = 0;
    }

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
