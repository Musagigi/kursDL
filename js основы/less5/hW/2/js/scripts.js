window.addEventListener('load', function () {
	let faq = document.querySelector('.faq');

	delegate(faq, '.ask', 'click', function () {
		let answer = this.closest('.item').querySelector('.answer');

		if (answer.classList.contains('open')) {
			let animation = answer.animate([
				{ opacity: 1, transform: 'translateX(0)' },
				{ opacity: 0, transform: 'translateX(100px)' }
			], { duration: 500 });

			animation.addEventListener('finish', function () {
				answer.classList.remove('open');
			});
		}
		else {
			answer.classList.add('open');

			answer.animate([
				{ opacity: 0, transform: 'translateX(-100px)' },
				{ opacity: 1, transform: 'translateX(0)' }
			], { duration: 300 });
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
