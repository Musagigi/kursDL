window.addEventListener('load', function () {

	let items = document.querySelectorAll('.item')

	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener('mouseenter', changeColor)
	}
})

function changeColor() {
	let colors = ['red', 'blue', 'aqua', 'orange', 'green']
	let num = Math.floor(Math.random() * colors.length)
	this.style.color = colors[num]
}