function main (input) {
	let result = 0;

	input.trim().split('\n')
		.forEach((line, i) => {
			let [ _, encName, secId, checkSum ] = line.match(/(.+)-(\d+)\[(.+?)]/);

			if (fiveHighestChars(encName).join('') === checkSum) {
				result += Number(secId);
			}
		});

	return result;
}

function fiveHighestChars (str) {
	let fqMap = frequencyMap(str);
	let result = [];

	for (let i = 0; i < 5; i++) {
		let ch = highestProp(fqMap);
		result.push(ch);
		delete fqMap[ch];
	}

	return result;
}

function frequencyMap (str) {
	let map = {};

	str.split('').forEach(ch => {
		if (ch === '-') return;
		map[ch] = map[ch] || 0;
		map[ch] += 1;
	});

	return map;
}

function highestProp (o) {
	let max = 0;
	let lowestChar;
	let result;

	for (let x in o) {
		if (!lowestChar) {
			lowestChar = x;
		}

		if (o[x] > max) {
			max = o[x];
			lowestChar = x;
			result = x;
		}
		else if (o[x] === max && x < lowestChar) {
			max = o[x];
			lowestChar = x;
			result = x;
		}
	}

	return result;
}

module.exports = main;