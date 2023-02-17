window.addEventListener('load', function () {

	let item = document.querySelectorAll('.item3')

	for (let i of item) {
		console.log(i);
		i.addEventListener('click', boxActive)
	}
})

function boxActive() {
	// item3-active - берет из css
	this.classList.toggle('item3-active')
	let color = this.classList.contains('item3-active') ? this.dataset.color : 'inherit'
	this.style.color = color
}

// https://www.youtube.com/watch?v=9cNcpBn0KLU&list=PLyeqauxei6jfKHgefLiYxMQye331JZuqb&index=2