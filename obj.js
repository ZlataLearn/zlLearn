var confirmed = false;
var user = {};
do {
	user.name = prompt('Введите имя', user.name || 'например, Жлята');
	user.town = prompt('Город:', user.town || 'Саранск');
	confirmed = confirm(`Имя:${user.name} 
Город: ${user.town} 
Верно?`)
} while (!confirmed)

console.log(user);