var love = document.getElementById('l-indsay');
var inspire = document.getElementById('l-i-ndsay');
var nice = document.getElementById('li-n-dsay');
var dare = document.getElementById('lin-d-say');
var special = document.getElementById('lind-s-ay');
var amaze = document.getElementById('linds-a-y');
var yes = document.getElementById('lindsa-y');

love.addEventListener('click', function(){
	// console.log('test')
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "http://api.giphy.com/v1/gifs/search?q=l&api_key=SFvhAK7TNBL8XH6P7n9Y3gYXA1S3LbTb&limit=1");
	xhr.send();
	xhr.addEventListener("readystatechange", processReq, false);
	var gif = document.createElement('iframe')
	love.innerHTML = ""
	function processReq(e){
		//console.log(JSON.parse(xhr.response).data)
			//for (var i = 0; i < JSON.parse(xhr.response).data.length; i++) {
				//console.log(JSON.parse(xhr.response).data[i].url)

				gif.src = JSON.parse(xhr.response).data[0].embed_url
				love.appendChild(gif)
			//}
	}
})

inspire.addEventListener('click', function(){
	// console.log('test')
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "http://api.giphy.com/v1/gifs/search?q=i&api_key=SFvhAK7TNBL8XH6P7n9Y3gYXA1S3LbTb&limit=1");
	xhr.send();
	xhr.addEventListener("readystatechange", processReq, false);
					var gif = document.createElement('iframe')

	inspire.innerHTML = ""
	function processReq(e){
		//console.log(JSON.parse(xhr.response).data)
		//	for (var i = 0; i < JSON.parse(xhr.response).data.length; i++) {
				//console.log(JSON.parse(xhr.response).data[i].url)
				gif.src = JSON.parse(xhr.response).data[0].embed_url
				inspire.appendChild(gif)
		//	}
	}
})

nice.addEventListener('click', function(){
	// console.log('test')
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "http://api.giphy.com/v1/gifs/search?q=n&api_key=SFvhAK7TNBL8XH6P7n9Y3gYXA1S3LbTb&limit=1");
	xhr.send();
	xhr.addEventListener("readystatechange", processReq, false);
					var gif = document.createElement('iframe')
	nice.innerHTML = ""


	function processReq(e){
		//console.log(JSON.parse(xhr.response).data)
			//for (var i = 0; i < JSON.parse(xhr.response).data.length; i++) {
				//console.log(JSON.parse(xhr.response).data[i].url)
				gif.src = JSON.parse(xhr.response).data[0].embed_url
				nice.appendChild(gif)
			//}
	}
})

dare.addEventListener('click', function(){
	// console.log('test')
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "http://api.giphy.com/v1/gifs/search?q=d&api_key=SFvhAK7TNBL8XH6P7n9Y3gYXA1S3LbTb&limit=1");
	xhr.send();
	xhr.addEventListener("readystatechange", processReq, false);
					var gif = document.createElement('iframe')
	dare.innerHTML = ""


	function processReq(e){
		//console.log(JSON.parse(xhr.response).data)
			//for (var i = 0; i < JSON.parse(xhr.response).data.length; i++) {
				//console.log(JSON.parse(xhr.response).data[i].url)
				gif.src = JSON.parse(xhr.response).data[0].embed_url
				dare.appendChild(gif)
		//	}
	}
})

special.addEventListener('click', function(){
	// console.log('test')
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "http://api.giphy.com/v1/gifs/search?q=s&api_key=SFvhAK7TNBL8XH6P7n9Y3gYXA1S3LbTb&limit=1");
	xhr.send();
	xhr.addEventListener("readystatechange", processReq, false);
					var gif = document.createElement('iframe')

	special.innerHTML = ""

	function processReq(e){
		//console.log(JSON.parse(xhr.response).data)
			//for (var i = 0; i < JSON.parse(xhr.response).data.length; i++) {
				//console.log(JSON.parse(xhr.response).data[i].url)
				gif.src = JSON.parse(xhr.response).data[0].embed_url
				special.appendChild(gif)
			//}
	}
})

amaze.addEventListener('click', function(){
	// console.log('test')
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "http://api.giphy.com/v1/gifs/search?q=a&api_key=SFvhAK7TNBL8XH6P7n9Y3gYXA1S3LbTb&limit=1");
	xhr.send();
	xhr.addEventListener("readystatechange", processReq, false);
					var gif = document.createElement('iframe')
	amaze.innerHTML = ""


	function processReq(e){
		//console.log(JSON.parse(xhr.response).data)
		//	for (var i = 0; i < JSON.parse(xhr.response).data.length; i++) {
				//console.log(JSON.parse(xhr.response).data[i].url)
				gif.src = JSON.parse(xhr.response).data[0].embed_url
				amaze.appendChild(gif)
		//	}
	}
})

yes.addEventListener('click', function(){
	// console.log('test')
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "http://api.giphy.com/v1/gifs/search?q=y&api_key=SFvhAK7TNBL8XH6P7n9Y3gYXA1S3LbTb&limit=1");
	xhr.send();
	xhr.addEventListener("readystatechange", processReq, false);
					var gif = document.createElement('iframe')

	yes.innerHTML = ""

	function processReq(e){
		//console.log(JSON.parse(xhr.response).data)
			//for (var i = 0; i < JSON.parse(xhr.response).data.length; i++) {
				//console.log(JSON.parse(xhr.response).data[i].url)
				gif.src = JSON.parse(xhr.response).data[0].embed_url
				yes.appendChild(gif)
			//}
	}
})