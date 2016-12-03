let validTriangle = (a,b,c) => (a+b>c) && (b+c>a) && (c+a>b);

function main(input) {
  let tot = 0, t1 = [], t2 = [], t3 = [];

  input
    .split('\n')
    .map(line => line.trim().split(/\s+/).map(n => Number(n)))
    .forEach(function (triangles) {
      [t1,t2,t3].forEach((t,i) => t.push(triangles[i]));

      if (t1.length !== 3) return;

      [t1,t2,t3].forEach(t => tot += validTriangle(...t));
      t1.length = t2.length = t3.length = 0;
    });

    return tot;
}

module.exports = main;
