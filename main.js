let pageCounter = 1;
let animalContainer = document.getElementById('animal-info');
let btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
	// request
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');

//say what happen when data is laoded
// define our requst
ourRequest.onload = function(){
	if (ourRequest.status >= 200 && ourRequest.status < 400) {
		var ourData = JSON.parse(ourRequest.responseText);
	//console.log(ourData[0]);
	renderHTML(ourData); 
	}else{
		alert('We connected to the server, but it returned an error!');
	}
};

ourRequest.onerror = function(){
	alert('Connection error');
};

//send our requst
ourRequest.send();
pageCounter++;
if (pageCounter > 3) {
	btn.classList.add('hide-me');
}
});

function renderHTML(data) {
	var htmlString = "";

	for (var i = 0; i < data.length; i++) {
		htmlString += "<p>" + data[i].name + " is a " + data[i].species + "that likes to eat ";

		for (var ii = 0; ii < data[i].foods.likes.length; ii++) {

			if (ii == 0) {
				htmlString += data[i].foods.likes[ii];
			}else{
				htmlString += " and " + data[i].foods.likes[ii];
			}
		}

		htmlString += " and dislikes ";

		for(var ii = 0; ii < data[i].foods.dislikes.length; ii++){
			if (ii == 0) {
				htmlString += data[i].foods.dislikes[ii];
			}else{
				htmlString += ' and ' + data[i].foods.dislikes[ii];
			}

		}

		htmlString += ".</p>"
	};

	animalContainer.insertAdjacentHTML('beforeend', htmlString);
};






