window.addEventListener('load', function () {
	let btnUp = document.querySelector('.btn')
	let menu = document.querySelector('.menu');

	delegate(menu, 'a', 'click', function (e) {
		// чтобы резко сразу не прыгать по ссылке
		e.preventDefault();
		// hash - это id селектора (#test) в ссылке тега <a> href="index.html#test"
		// this = elem из строки 32
		let targets = document.querySelector(this.hash);
		scrollToElem(targets)
		setActiveMenuItem(menu, this)
	});

	// location - путь в адресной строке
	// для перехода по ссылке через адрес. стркоу браузера
	let hash = window.location.hash;
	let autoTarget = hash.length > 0 ? document.querySelector(hash) : null;

	if (autoTarget !== null) {
		scrollToElem(autoTarget, getMarginTop);
		setActiveMenuItem(menu, menu.querySelector(`[href$="${hash}"]`));
	}

	btnUp.addEventListener('click', function () {
		scrollToY(0)
	})

	document.addEventListener('scroll', function () {
		window.scrollY > 200 ? btnUp.classList.add('goTop') : btnUp.classList.remove('btn')
		window.scrollY < 200 ? btnUp.classList.remove('goTop') : btnUp.classList.add('btn')
	})
});

function delegate(box, selector, eventName, handler) {
	box.addEventListener(eventName, function (e) {
		let elem = e.target.closest(selector);

		if (elem !== null && box.contains(elem)) {
			handler.call(elem, e);
		}
	});
}

function setActiveMenuItem(menu, item) {
	menu.querySelectorAll('a').forEach(link => link.classList.remove('menu__link-active'));
	item.classList.add('menu__link-active');
}

function scrollToElem(elem) {
	let coordsElem = elem.getBoundingClientRect();
	let contentMarginTop = window.getComputedStyle(document.querySelector('.content'))
	let elemCoordsTop = window.scrollY + coordsElem.top - parseInt(contentMarginTop.marginTop)
	scrollToY(elemCoordsTop)
}

function scrollToY(coords) {
	window.scrollTo({
		top: coords,
		behavior: 'smooth'
	})
}


// дз
// 3 - добавить Кнопку при скролле, чтобы при нажатии, она возвраща нас в начало страницы
// доп-подсветка при скроле