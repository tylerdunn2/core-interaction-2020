/*
var square = document.getElementById("ball");


var red = 255;
var green = 0;
var blue = 0;
var towardsBlue = true;

setInterval(function(){

square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
if(towardsBlue == true){
		blue = blue + 20;
		red = red - 20;
	}else{
		blue = blue - 20;
		red = red + 20;
	}
	
	// if we reach the maximums, switch direction
	if(blue >= 255 && red <= 0){
		towardsBlue = false;
	}else if(red >= 255 && blue <= 0){
		towardsBlue = true;
	}


	// stretch.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";

}, 500)

*/

// innerHTML adds content




// insertAdjacentHTML adds new elements
var container = document.getElementById("stretch")


container.insertAdjacentHTML('beforeend', `
		<div class="ball"></div>
	`)

var degrees = 0;

setInterval(function(){

	for (var i = 0; i < 1; i++) {
		

		// Math.ceil means 1.00001 = 2
		// Math.floor means 1.9999999 = 1
	

		container.insertAdjacentHTML('beforeend', `
			<div 
				class="ball"
				style="transform:skew(${degrees}deg);
						background-color: orange;"
			> I'm lost but I'm trying!</div>
		`)

		degrees = degrees + 100;

	}

}, 1000)













