window.addEventListener('load', function () {
	let links = document.querySelectorAll('nav a')
	let images = document.querySelectorAll('.img')

	for (let i = 0; i < links.length; i++) {
		links[i].addEventListener('click', linkClicked)
	}

	for (let i = 0; i < images.length; i++) {
		images[i].addEventListener('click', imgClicked)
		images[i].addEventListener('contextmenu', cancelEvent) // 'contextmenu' - правый клик
		images[i].addEventListener('mousedown', cancelEvent)
	}

	// function imgClicked(event) {
	// 	console.log(event);
	// }

	function imgClicked(event) {
		console.log(event);
		if (event.ctrlKey) {
			this.classList.toggle('active')
		}
		else {
			for (let i = 0; i < images.length; i++) {
				images[i].classList.remove('active')
			}

			this.classList.add('active')
		}
	}
})

// отмена события
function cancelEvent(event) {
	event.preventDefault()
}

// вопрос при переходе по ссылке
function linkClicked(event) {
	if (!confirm('вы уверены')) {
		event.preventDefault()
	}
}


// document.addEventListener('keydown', function (event) {
// 	console.log(event);
// })