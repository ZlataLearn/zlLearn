var numbers = []
for (var i = 0; i < 10000000; i++) {
	numbers.push(Math.random())
}
var min = numbers[0];
var max = numbers[0];
var sum = 0;

for (var number of numbers) {
	if (min > number) {
		min = number;
	}
	if (max < number) {
		max = number;
	}
	sum = sum + number;
}

var average = sum / numbers.length




console.log('Минимум', min);
console.log('Максимум нахой:', max)
console.log('Среднее арифметическое', average)