window.addEventListener('load', function () {


	let item = document.querySelectorAll('.check')
	let form = document.querySelector('form')


	form.addEventListener('click', function (event) {

		let inp = event.target.classList.contains('check')
		let sbmt = event.target.classList.contains('sbmt')

		if (sbmt) {
			for (let i = 0; i < item.length; i++) {
				if (item[i].value == '') {
					item[i].classList.add('errorColor')
					event.preventDefault()
				}
				else if (item[i].value != '') {
					item[i].classList.remove('errorColor')
				}
			}

		}
		if (inp) {
			event.target.classList.remove('errorColor');

		}
	})
})
