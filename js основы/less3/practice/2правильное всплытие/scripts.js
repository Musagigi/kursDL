window.addEventListener('load', function () {

	let box = document.querySelector('.box')

	box.addEventListener('click', function (evt) {

		// чтобы задействовать цифру которая находится в отдельном теге внутри  .item
		// решается это путем closest идем снизу вверх span-div-div-body и т.д.
		// closest() возвращает ближайший родительский элемент (или сам элемент), 
		// который соответствует заданному CSS-селектору или null
		let elem = evt.target.closest('.item')

		if (elem !== null && box.contains(elem)) {
			// box.contains(elem) - если случайно .item будет поверх box
			changeColor(elem)
		}

	})

});

function changeColor(el) {
	let colors = ['#f00', '#ff0', '#0f0'];
	let num = Math.floor(Math.random() * colors.length);
	el.style.color = colors[num];
}