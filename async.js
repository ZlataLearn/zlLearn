for (let i = 0; i < 3; i++) {
	console.log('Во время цикла', i);
	setTimeout(function() {
		console.log('Асинхронно', i);
	}, 2000)
}