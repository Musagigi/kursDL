window.addEventListener('load', function () {

	let numOne = document.querySelector('.inpNumbOne')
	let numTwo = document.querySelector('.inpNumbTwo')
	let selSign = document.querySelector('.selectSign')
	let btnAns = document.querySelector('.btnAns')
	let result = document.querySelector('.result')
	let mathOptions = {
		plus: (a, b) => a + b,
		minus: (a, b) => a - b,
		multi: (a, b) => a * b,
		dvsin: (a, b) => a / b,
	}

	btnAns.addEventListener('click', calculate)

	function calculate() {

		if (numOne.value === '' || numTwo.value === '') {
			return result.innerText = 'введите числа'
		}

		let num1 = +numOne.value
		let num2 = +numTwo.value
		/* let valSelSign = selSign.value - берем знак
		let fn = mathOptions[valSelSign] - обращаемся к объекту по знаку (ключу)
		result = fn(num1, num2)
		*/
		result.innerText = mathOptions[selSign.value](num1, num2) // укороченный вариант

		this.disabled = true
	}


	// делаем btn активным
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