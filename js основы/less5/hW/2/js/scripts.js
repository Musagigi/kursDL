window.addEventListener('load', function () {
	let faq = document.querySelector('.faq');

	delegate(faq, '.ask', 'click', function () {
		let answer = this.closest('.item').querySelector('.answer');

		if (answer.classList.contains('open')) {
			let animation = answer.animate([
				{ height: '169px' },
				{ height: '0' }
			], { duration: 500 });

			animation.addEventListener('finish', function () {
				answer.classList.remove('open');
			});
		}
		else {
			answer.classList.add('open');

			answer.animate([
				{ height: '0' },
				{ height: '169px' }
			], { duration: 500 });
		}
	});

});

function delegate(box, selector, eventName, handler) {
	box.addEventListener(eventName, function (e) {
		let elem = e.target.closest(selector);

		if (elem !== null && box.contains(elem)) {
			handler.call(elem, e);
		}
	});
}


// выводить анимацию сверху вниз, по высоте, нужно получить данные высоты
// браузер сам не может отслеживать высоту