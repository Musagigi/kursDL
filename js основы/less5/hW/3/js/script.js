window.addEventListener('load', function () {

	let btnPrev = document.querySelector('.gallery .buttons .prev');
	let btnNext = document.querySelector('.gallery .buttons .next');

	let images = document.querySelectorAll('.gallery .photos img');
	let i = 0;

	btnPrev.addEventListener('click', function () {

		images[i].classList.remove('showed');
		i--;

		if (i < 0) {
			i = images.length - 1;
		}


		images[i].classList.add('showed');

		images[i].animate([
			{ transform: 'scale(0)' },
			{ transform: 'scale(1)' }
		], { duration: 1000 });
	});

	btnNext.addEventListener('click', function () {

		images[i].classList.remove('showed');
		i++;
		images[i].animate([
			{ transform: 'scale(1)' },
			{ transform: 'scale(0)' }
		], { duration: 1000 });

		if (i >= images.length) {
			i = 0;
		}

		images[i].classList.add('showed');


	});

});

/*
	new Slider('.gallery-1');
	let s2 = new Slider('.gallery-2');

	setInterval(function(){
		s2.next();
	}, 3000)
*/