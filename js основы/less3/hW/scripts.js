window.addEventListener('load', function () {


	let form = document.querySelector('.form') // находим во всем документе селектор form
	let itemInput = form.querySelectorAll('.check') //ищем в рамках узла form
	let validForm = {
		name: /^[a-z ,.'-]+$/i,
		phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
		email: /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,

	}

		;
	form.addEventListener('click', function (event) {
		// console.log(event);

		let hasError = false
		let validData

		//если (при событии, цель класс содержит ('sbmt') ) -> идем дальше внутрь
		// if(event.target.classList.[0] == 'sbmt') -> работает смотреть в DOM
		// if(event.target.classList.value == 'sbmt') -> работает
		if (event.target.classList.contains('sbmt')) {
			for (let i = 0; i < itemInput.length; i++) {

				validData = validForm[itemInput[i].name].test(itemInput[i].value)

				if (itemInput[i].value == '' || !validData) {
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