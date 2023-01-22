window.addEventListener('load', function () {


	let form = document.querySelector('.form') // находим во всем документе селектор form
	let itemInput = form.querySelectorAll('.check') //ищем в рамках узла form


	form.addEventListener('click', function (event) {

		// let inp = event.target.classList.contains('check')
		// let sbmt = event.target.classList.contains('sbmt')
		let hasError = false

		if (event.target.classList.contains('sbmt')) {
			for (let i = 0; i < itemInput.length; i++) {
				if (itemInput[i].value == '') {
					itemInput[i].classList.add('errorColor')
					hasError = true
				}
				else if (itemInput[i].value != '') {
					itemInput[i].classList.remove('errorColor')
				}
			}
			if (hasError) { event.preventDefault() }

		}
		if (event.target.classList.contains('check')) {
			event.target.classList.remove('errorColor');
		}
	})
})

// for of - перебор итерируемой сущности у сущности запускается Symbol.iterator