// обычные функции вызываются в контексте элемента, в котором были вызваны
/* function sum(a, b){
	return a + b;
}

let sum = function(a, b){
	return a + b;
}

let sum = (a, b) => {
	return a + b;
}
 */
/* let sum = (a, b) => a + b;
let double = a => a * 2; */

/* let users = [
	{ id: 1, name: 'Дмитрий', role: 'admin' },
	{ id: 2, name: 'dfds', role: 'agent' },
	{ id: 3, name: 'dsfdfs', role: 'admin' }
];

console.log(users.filter(user => user.role === 'admin'))

console.log(users.filter(function(user){
	return user.role === 'admin';
})); */



/* document.querySelector('.sample').addEventListener('click', function(){
	let div = this;

	setTimeout(function(){
		// Обычная функция функия вызвана в контексте setTimeout, который
		// является методом объекта Window, поэтому он не сохранит контекст
		// элемента, внутри которого мы находимся ('.sample')
		div.style.color = 'red';
	}, 1000);
	
});
 */


document.querySelector('.sample').addEventListener('click', function () {
	setTimeout(() => {
		// Стрелочная функция сохраняет контекст того места, в которм была объявлена,
		// тут сбивает с толку setTimeout, так как стрелка находится внутри него, но нужно
		// смотреть на строку выше, то есть, наружу, в данном случае, мы находимся внутри
		// функции которая находится в контексте объекта ('.sample') значит и стрелочная 
		// будет ссылать на этот объект
		this.style.color = 'red';
	}, 1000);
});
