window.addEventListener('load', function () {

	let numOne = document.querySelector('.inpNumbOne')
	let selSign = document.querySelector('.selectSign')
	let numTwo = document.querySelector('.inpNumbTwo')
	let btnAns = document.querySelector('.btnAns')
	let answer = document.querySelector('.answer')
	console.log(numOne, selSign, numTwo, btnAns, answer);

	btnAns.addEventListener('click', numbers)

})

function numbers() {
	if (selSign.option.value == 'plus') {
		answer = +numOne + +numTwo
	}
}