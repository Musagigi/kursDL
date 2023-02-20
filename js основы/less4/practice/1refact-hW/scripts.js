window.addEventListener('load', function () {


	let form = document.querySelector('.form') // находим во всем документе селектор form
	let items = form.querySelectorAll('.check') //ищем в рамках узла form
	let validForm = {
		name: {
			pattern: /^[a-z ,.'-]+$/i,
			errorText: 'Введите корректное имя'
		},
		phone: {
			pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
			errorText: 'Введите корректный телефон'
		},
		email: {
			pattern: /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,
			errorText: 'Введите корректную почту'
		},

	};

	form.addEventListener('click', function (event) {

		let hasError = false
		let item
		let validData

		if (event.target.classList.contains('sbmt')) {
			for (let i = 0; i < items.length; i++) {
				item = items[i]
				validData = validForm[item.name]

				if (item.value == '' || !validData.pattern.test(item.value)) {
					item.classList.add('errorColor')
					hasError = true
					showError(item, validData.errorText)
				}
				else if (item.value != '') {
					item.classList.remove('errorColor')
				}
			}
			if (hasError) { event.preventDefault() }

		}
		if (event.target.classList.contains('check')) {
			event.target.classList.remove('errorColor');
			showError(event.target, '')
		}
	})
});

function showError(input, message) {

	let box = input.closest('.formInputBox') // обратились к родителю инпута
	let msgBox = box.querySelector('.error-message') // нашли внутри родителя, блок с ошибкой
	msgBox.innerHTML = message // записали текст с ошибкой в блок для ошибки
}

// for of - перебор итерируемой сущности у сущности запускается Symbol.iterator