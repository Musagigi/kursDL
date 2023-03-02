window.addEventListener('load', function () {
	let menu = document.querySelector('.menu');
	let content = this.document.querySelector('.content')
	let test2 = this.getComputedStyle(content)
	let marg = test2.marginTop.replace(/\D/g, "");
	// console.dir(test2.marginTop);

	delegate(menu, 'a', 'click', function (e) {
		// чтобы резко сразу не прыгать по ссылке
		e.preventDefault();

		// hash - это id селектора (#test) в ссылке тега <a> href="index.html#test"
		// this = elem из строки 32
		let targets = document.querySelector(this.hash);

		let coords = getCoords(targets, +marg)
		// console.log(coords);
		window.scrollBy({
			top: coords.top,
			behavior: "smooth"
		});
		// scrollToElem(targets);
		// setActiveMenuItem(menu, this);
	});

	// location - путь в адресной строке
	// для перехода по ссылке через адрес. стркоу браузера
	// let hash = window.location.hash;
	// let autoTarget = hash.length > 0 ? document.querySelector(hash) : null;

	// if (autoTarget !== null) {
	// 	scrollToElem(autoTarget);
	// 	setActiveMenuItem(menu, menu.querySelector(`[href$="${hash}"]`));
	// }
});

function delegate(box, selector, eventName, handler) {
	box.addEventListener(eventName, function (e) {
		let elem = e.target.closest(selector);

		if (elem !== null && box.contains(elem)) {
			handler.call(elem, e);
		}
	});
}

function getCoords(elem, marg) {
	let box = elem.getBoundingClientRect();
	console.log(box);

	return {
		top: box.top - marg,
	};
}

// function scrollToElem(elem) {
// 	let test = elem.getBoundingClientRect()

// 	// плавная прокрутка
// 	window.scrollTo({
// 		test,
// 		behavior: "smooth"
// 	});
// }

// function setActiveMenuItem(menu, item) {
// 	menu.querySelectorAll('a').forEach(link => link.classList.remove('menu__link-active'));
// 	item.classList.add('menu__link-active');
// }


// дз
// 1 - поправить 38 строку (offsetTop) неправильная функция отступа (не надежно), применить getbountedByRef
// 2 - заменить 70 на getComputedStyle получить css св-во которое змаенить 70
// 3 - добавить Кнопку при скролле, чтобы при нажатии, она возвраща нас в начало страницы
// доп-подсветка при скроле