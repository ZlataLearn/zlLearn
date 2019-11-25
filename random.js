function random(from, to) {
	var rawRandom = Math.random()
	var wellDoneRandom = from + rawRandom * (to - from);
	return Math.round(wellDoneRandom);
}

console.log('От 0   до 7',   random(0, 7));
console.log('От 5   до 17',  random(5, 17));
console.log('От 1   до 2',   random(1, 2));
console.log('От 10  до 40',  random(10, 40));
console.log('От -5  до 0',   random(-5, 0));
console.log('От 300 до 700', random(300, 700));

