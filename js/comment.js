var input = document.getElementById('input');
var btn = document.getElementById('btn');
var comments = document.getElementById('comments')
var counter = localStorage.length;



function ohNo(com, datetime){
	this.comment = com;
	this.current = datetime;
}

btn.addEventListener('click', function(){
	if (input.value != '') {
		var div = document.createElement('div');
		var text = document.createElement('p');
		var time = document.createElement('p')
		div.setAttribute('class', 'comment')
		text.innerHTML = input.value;
		div.appendChild(text);
		var date = new Date()
		time.innerHTML = date;
		div.appendChild(time);
		comments.appendChild(div)

		var one = new ohNo(input.value, date);
		var two = JSON.stringify(one);
		console.log(two)
		console.log(one)
		localStorage.setItem(counter, two)

		//console.log(input.value)
		input.value = ''
		counter++
		console.log(localStorage.length)
	} else {
		alert('nothing there!')
	}
})

for (var i = 0; i < localStorage.length; i++){
	var div	= document.createElement('div');
	var text = document.createElement('p');
	var time = document.createElement('p');
	var parsed = JSON.parse(localStorage.getItem(localStorage.key(i)));
	div.setAttribute('class', 'comment')
	text.innerHTML = parsed.comment;
	div.appendChild(text);
	time.innerHTML = parsed.current
	div.appendChild(time);
	comments.appendChild(div)
}