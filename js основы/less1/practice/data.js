window.addEventListener('load', function () {

	// из-за qSAll переменная items, присвоит Объект NodeList (является коллекцией узлов)
	// выглядит как массив (получаетя итерируемый объект или псевдомассив)
	let items = document.querySelectorAll('.item2')
	console.log(items);
	for (let i of items) {
		console.log(i);
		i.addEventListener('click', changeColor)
	}

})

function changeColor() {
	// в html теге есть атрибут data-color. поэтому в датасете есть св-во color
	this.style.color = this.dataset.color // dataset - св-во у объекта, смотреть в ДОМ 
	console.dir(this);
}