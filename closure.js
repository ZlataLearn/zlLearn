function createCounter(name) {
	var currentValue = 0;
	function increment() {
		console.log(`Current value of ${name} is ${++currentValue}`);
	}
	return increment;
}

var counter = createCounter('first');

counter();
counter();
counter();
counter();
counter();

var counter3 = counter;

var counter2 = createCounter('second');

counter2();
counter2();
counter2();

counter3();
counter3();