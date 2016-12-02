let day = process.argv[process.argv.length - 2];
let part = process.argv[process.argv.length - 1];
let program = require(`./${day}/${part}`);
let input = require(`fs`).readFileSync(`./${day}/input.txt`).toString();

console.log(`Running Day #${day} Pt ${part}`);
console.log(program(input));
