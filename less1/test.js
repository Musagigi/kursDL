// window.addEventListener('load', function () {
// 	let div = document.querySelector('.some')

// 	div.addEventListener('click', function () {
// 		div.innerText += 1
// 	})

// 	div.addEventListener('click', function () {
// 		div.innerText += 2
// 	})
// })

window.addEventListener('load', function () {
	let div = document.querySelector('.some')
	let btn = document.querySelector('.btnColor')
	let colors = ['orange', 'white', 'red', 'blue']

	div.addEventListener('mouseenter', function () {
		let num = Math.floor(Math.random() * colors.length)
		div.style.color = colors[num]
	})

	btn.addEventListener('click', function () {
		div.style['background-color'] = 'black'
		colors.push('purple')
	})
})