window.addEventListener('load', function () {

	let calculater = document.querySelector('.calculater')
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

	delegate(calculater, 'input, select', 'input', function () {
		btnAns.disabled = false
	})

	// лучше не передавать обычные селекторы как на верхнем delegate, 
	// а точные селекторы (класс селектора)
	delegate(calculater, '.inpNumbOne, .inpNumbTwo', 'input', function () {
		this.value = this.value.replace(/[^0-9]/g, '')
	})

	// БЫЛО ТАК
	// // делаем btn не активным
	// numOne.addEventListener('input', changeBtn)
	// numTwo.addEventListener('input', changeBtn)
	// selSign.addEventListener('input', changeBtn)
	// function changeBtn() {
	// 	btnAns.disabled = false
	// }


	// // запрещаем все кроме цифр
	// numOne.addEventListener('input', clearInput)
	// numTwo.addEventListener('input', clearInput)
	// function clearInput() {
	// 	this.value = this.value.replace(/[^0-9]/g, '')
	// }
})

function delegate(box, selector, eventName, handler) {
	box.addEventListener(eventName, function (event) {

		let elem = event.target.closest(selector)

		if (elem !== null) {
			handler.call(elem) // вызываем handler в контексте elem
			// handler.call(elem, event) можно передать еще event
		}

	})
}
