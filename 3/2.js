function main(input) {
  let tot = 0, t1 = [], t2 = [], t3 = [];

  input
    .split('\n')
    .map(line => line.trim().split(/\s+/).map(n => Number(n)))
    .forEach(function (triangles) {
      t1.push(triangles[0]);
      t2.push(triangles[1]);
      t3.push(triangles[2]);

      if (t1.length !== 3) return;

      tot += validTriangle.apply(null, t1);
      tot += validTriangle.apply(null, t2);
      tot += validTriangle.apply(null, t3);

      t1.length = t2.length = t3.length = 0;
    });

    return tot;
}

function validTriangle(a, b, c) {
  return a + b > c &&
    a + c > b &&
    b + c > a;
}

module.exports = main;
