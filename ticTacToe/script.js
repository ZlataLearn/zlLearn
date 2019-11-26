const buttons = document.querySelectorAll('button');
let nextStep = 'X';

console.log('Начинаю подписывать');
for (let currentButton of buttons) {
	currentButton.addEventListener("click", () => {
		console.log(currentButton);
		if (currentButton.innerText == "") {
			currentButton.innerText = nextStep;
			nextStep = nextStep === "0" ? "X" : "0";
		}
	})
}


