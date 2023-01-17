window.addEventListener('load', function () {

	let numOne = document.querySelector('.inpNumbOne')
	let numTwo = document.querySelector('.inpNumbTwo')
	let selSign = document.querySelector('.selectSign')
	let btnAns = document.querySelector('.btnAns')
	let result = document.querySelector('.result')


	btnAns.addEventListener('click', calculate)

	function calculate() {

		let num1 = +numOne.value
		let num2 = +numTwo.value

		if (numOne.value === '' && numTwo.value === '') {
			return result.innerText = 'введите числа'
		}
		switch (selSign.value) {
			case 'plus':
				result.innerText = num1 + num2
				break
			case 'minus':
				result.innerText = num1 - num2
				break
			case 'multi':
				result.innerText = num1 * num2
				break
			case 'dvsin':
				result.innerText = num1 / num2
				break
		}
		this.disabled = true
	}


	// делаем btn не активным
	numOne.addEventListener('input', changeBtn)
	numTwo.addEventListener('input', changeBtn)
	selSign.addEventListener('input', changeBtn)

	function changeBtn() {
		btnAns.disabled = false
	}


	// запрещаем все кроме цифр
	numOne.addEventListener('input', clearInput)
	numTwo.addEventListener('input', clearInput)

	function clearInput() {
		this.value = this.value.replace(/[^0-9]/g, '')
	}


	// if (selSign.value === 'minus') { return result.innerText = num1 - num2 }
	// 	if (selSign.value === 'multi') { return result.innerText = num1 * num2 }
	// 	return result.innerText = num1 / num2
})