window.addEventListener('load', function () {

	let wrap = document.querySelector('.wrap')

	// всю логику перенесли в одну функцию, которая будет подходить под большинство случаев
	delegate(wrap, '.item', 'click', function () {
		let colors = ['#f00', '#ff0', '#0f0'];
		let num = Math.floor(Math.random() * colors.length);
		this.style.color = colors[num]; // получается функция вызвалась в контексте elem(.item)
	})

});

// должна быстро подписаться на каком-то большом элементе на 
// обработку событий связ-ых с дочерними элементами по технике всплытия
// 1) нужно выбрать коробку на которую нужно подписатья в данном случае - box
// 2) нужно понимать какой фильтрующий селектор - .item
// 3) какое название события - 'click'
// 4) какое целеове дейтсвие changeColor()
function delegate(box, selector, eventName, handler) {
	box.addEventListener(eventName, function (event) {

		let elem = event.target.closest(selector)

		if (elem !== null) {
			handler.call(elem) // вызываем handler в контексте elem
			// handler.call(elem, event) можно передать еще event
		}

	})
}

// БЫЛО ТАК
/*
window.addEventListener('load', function () {

	let box = document.querySelector('.box')

	box.addEventListener('click', function (evt) {

		// чтобы задействовать цифру которая находится в отдельном теге внутри  .item
		// решается это путем closest идем снизу вверх span-div-div-body и т.д.
		// closest() возвращает ближайший родительский элемент (или сам элемент), 
		// который соответствует заданному CSS-селектору или null
		let elem = evt.target.closest('.item')

		if (elem !== null) {
			changeColor(elem)
		}

	})

});

function changeColor(el) {
	let colors = ['#f00', '#ff0', '#0f0'];
	let num = Math.floor(Math.random() * colors.length);
	el.style.color = colors[num];
}
*/