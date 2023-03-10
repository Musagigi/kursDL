window.addEventListener('load', function () {
	let btnUp = document.querySelector('.btn')
	let headerMenu = document.querySelector('.menu');

	delegate(headerMenu, 'a', 'click', function (e) {
		// чтобы резко сразу не прыгать по ссылке
		e.preventDefault();
		// hash - это id селектора (#test) в ссылке тега <a> href="index.html#test"
		let targets = document.querySelector(this.hash);
		let coordTarget = coordElement(targets)
		scrollToY(coordTarget)
		setActiveMenuItem(headerMenu, this)
	});
	// location - путь в адресной строке
	// для перехода по ссылке через адрес. стркоу браузера
	let hash = window.location.hash;
	let autoTarget = hash.length > 0 ? document.querySelector(hash) : null;

	if (autoTarget !== null) {
		coordElement(autoTarget, getMarginTop);
		setActiveMenuItem(headerMenu, headerMenu.querySelector(`[href$="${hash}"]`));
	}

	btnUp.addEventListener('click', function () {
		scrollToY(0)
		setActiveMenuItem(headerMenu, this)
	})

	document.addEventListener('scroll', function () {
		window.scrollY > 200 ? btnUp.classList.add('goTop') : btnUp.classList.remove('btn')
		window.scrollY < 200 ? btnUp.classList.remove('goTop') : btnUp.classList.add('btn')

		let positionY = window.scrollY
		let headerLinks = headerMenu.querySelectorAll('a')

		headerLinks.forEach(linkItem => {
			let coordlink = document.querySelector(linkItem.hash)
			let exactCoordLink = coordElement(coordlink) - 50
			if (exactCoordLink <= positionY) {
				setActiveMenuItem(headerMenu, linkItem)
			}
		})
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

function coordElement(elem) {
	let coordsElem = elem.getBoundingClientRect();
	let contentMarginTop = window.getComputedStyle(document.querySelector('.content'))
	let elemCoordsTop = window.scrollY + coordsElem.top - parseInt(contentMarginTop.marginTop)
	return elemCoordsTop
}

function scrollToY(coords) {
	window.scrollTo({
		top: coords,
		behavior: 'smooth'
	})
}

// let coordsItemLink = document.querySelector(linkItemHeader.hash).getBoundingClientRect()
// let contentMarginTop = window.getComputedStyle(document.querySelector('.content'))
// let testt = window.scrollY + coordsItemLink.top - parseInt(contentMarginTop.marginTop)


// getCoordsElement()
// дз
// 3 - добавить Кнопку при скролле, чтобы при нажатии, она возвраща нас в начало страницы
// доп-подсветка при скроле