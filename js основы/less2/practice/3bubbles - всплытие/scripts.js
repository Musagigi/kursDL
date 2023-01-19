window.addEventListener('load', function () {

	let btn = document.querySelector('.btn')
	let box = document.querySelector('.box')

	box.addEventListener('click', function (evt) {
		//changeColor(evt.target); //передаем в changeColor элемент на который тыкнули
		// есть минус
		// если у итемов будут отступы, то есть шанс тыкнуть в этот отступ
		// получается тык на сам box, и покрасится весь box

		// решение этой проблемы
		if (evt.target.classList.contains('item')) { // target идет в самую глудь события и берет элем
			changeColor(evt.target)
			console.log(evt);
		}
		// если в теге например цифра будет обернута в тег span, то на нее событие уже не идет
	})

	btn.addEventListener('click', function () {
		let div = document.createElement('div')
		div.classList.add('item')
		div.innerHTML = 'Text ' + (box.children.length + 1)
		box.appendChild(div)

	})

});

function changeColor(el) {
	let colors = ['#f00', '#ff0', '#0f0'];
	let num = Math.floor(Math.random() * colors.length);
	el.style.color = colors[num];
}
