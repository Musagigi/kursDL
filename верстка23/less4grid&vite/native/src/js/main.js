import '../css/main.scss'

document.addEventListener('DOMContentLoaded', function () {
	let gridBox = document.querySelector('.catalog-box');
	let bigImg = document.querySelector('.catalog-item__full img');

	function setRatio() {
		gridBox.style.setProperty('--bigW', bigImg.naturalWidth);
		gridBox.style.setProperty('--bigH', bigImg.naturalHeight);
	}

	if (bigImg !== null) {
		if (bigImg.naturalWidth > 0) {
			setRatio();
		} else {
			bigImg.addEventListener('load', function () {
				setRatio();
			});
		}
	}
});