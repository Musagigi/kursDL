window.addEventListener('load', function(){
	let faq = document.querySelector('.faq');
	
	delegate(faq, '.ask', 'click', function(){
		let answer = this.closest('.item').querySelector('.answer');
		answer.classList.toggle('open');
	});

});

function delegate(box, selector, eventName, handler){
	box.addEventListener(eventName, function(e){
		let elem = e.target.closest(selector);

		if(elem !== null && box.contains(elem)){
			handler.call(elem, e);
		}
	});
}
