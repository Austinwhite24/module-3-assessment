console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('The form has been submitted successfully')
	
}
function niceComment () {
	alert('You are good looking')
}

let form = document.querySelector('form#contact');
let duckies = document.querySelector('#duckie')

form.addEventListener('submit', handleSubmit);


duckies.addEventListener('mouseover', niceComment)



