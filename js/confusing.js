var text = document.getElementsByClassName('title');
console.log(text)

for (let i = 0; i < text.length; i++) {
	console.log(text[i])
	text[i].addEventListener('click', function(){
		switch(i){
			case 0:
				text[i].innerHTML = "Local Storage<br>cakeImage.addEventListener('click', function(){<br>cakeCount++<br>localStorage.setItem('cake', cakeCount);<br>cakeText.innerHTML = cakeCount;"
			break;
			case 1:
				text[i].innerHTML = 'DOM<br>magic.'
			break;
			case 2:
				text[i].innerHTML = 'Variables & Data Types<br>unicorn poop.'
			break;
			case 3:
				text[i].innerHTML = 'Event Listeners<br>cause can.'
			break;
			case 4:
				text[i].innerHTML = 'Functions<br>cause bottle.'
			break;
			case 5:
				text[i].innerHTML = 'For Loops<br>why not?'
		}	
	})
}