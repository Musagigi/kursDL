window.addEventListener('load', function () {

	let numOne = document.querySelector('.inpNumbOne')
	let numTwo = document.querySelector('.inpNumbTwo')
	let selSign = document.querySelector('.selectSign')
	let btnAns = document.querySelector('.btnAns')
	let result = document.querySelector('.result')

	console.log(numOne, selSign, numTwo, btnAns, result);

	btnAns.addEventListener('click', calculate)

	function calculate() {
		if (numOne.value === '' && numTwo.value === '') {
			return
		}
		if (selSign.value === 'plus') {
			result.innerText = +numOne.value + +numTwo.value
			return this.disabled = true
		}
		if (selSign.value === 'minus') {
			result.innerText = +numOne.value - +numTwo.value
			return this.disabled = true
		}
		if (selSign.value === 'multi') {
			result.innerText = +numOne.value * +numTwo.value
			return this.disabled = true
		}
		if (selSign.value === 'dvsin') {
			result.innerText = +numOne.value / +numTwo.value
			return this.disabled = true
		}
	}

	numOne.addEventListener('keydown', changeBtn)
	numTwo.addEventListener('keydown', changeBtn)

	function changeBtn() {
		this.value = this.value.replace(/\D/g, '')
		if (this) { return btnAns.disabled = false }
	}

	// if (selSign.value === 'minus') { return result.innerText = num1 - num2 }
	// 	if (selSign.value === 'multi') { return result.innerText = num1 * num2 }
	// 	return result.innerText = num1 / num2
})