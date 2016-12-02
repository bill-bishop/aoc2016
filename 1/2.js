const NORTH = [0,  1, 'N'];
const SOUTH = [0, -1, 'S'];
const EAST  = [1,  0, 'E'];
const WEST  = [-1, 0, 'W'];

let vertDist = 0;
let horzDist = 0;
let facing = NORTH;
let visits = {};
let found;

let nextDirMap = {
  N: { L: WEST, R: EAST },
  E: { L: NORTH, R: SOUTH },
  S: { L: EAST, R: WEST },
  W: { L: SOUTH, R: NORTH }
}

function follow (str) {
  str.split(', ').forEach(parseInput);
  return found;
}

function parseInput (str) {
  turn(str[0]);
  move(Number(str.substr(1)));
}

function turn (turnStr) {
  facing = nextDirMap[facing[2]][turnStr];
}

function move(n) {
  while (n > 0 && !found) {
    horzDist += facing[0];
    vertDist += facing[1];

    visits[horzDist] = visits[horzDist] || {};
    visits[horzDist][vertDist] = visits[horzDist][vertDist] + 1 || 1;

    if (visits[horzDist][vertDist] === 2) {
      found = Math.abs(vertDist) + Math.abs(horzDist);
      break;
    }

    n -= 1;
  }
}

function input() {
  return `R1, R1, R3, R1, R1, L2, R5, L2, R5, R1, R4, L2, R3, L3, R4, L5, R4, R4, R1, L5, L4, R5, R3, L1, R4, R3, L2, L1, R3, L4, R3, L2, R5, R190, R3, R5, L5, L1, R54, L3, L4, L1, R4, R1, R3, L1, L1, R2, L2, R2, R5, L3, R4, R76, L3, R4, R191, R5, R5, L5, L4, L5, L3, R1, R3, R2, L2, L2, L4, L5, L4, R5, R4, R4, R2, R3, R4, L3, L2, R5, R3, L2, L1, R2, L3, R2, L1, L1, R1, L3, R5, L5, L1, L2, R5, R3, L3, R3, R5, R2, R5, R5, L5, L5, R2, L3, L5, L2, L1, R2, R2, L2, R2, L3, L2, R3, L5, R4, L4, L5, R3, L4, R1, R3, R2, R4, L2, L3, R2, L5, R5, R4, L2, R4, L1, L3, L1, L3, R1, R2, R1, L5, R5, R3, L3, L3, L2, R4, R2, L5, L1, L1, L5, L4, L1, L1, R1`;
}

module.exports = follow;
