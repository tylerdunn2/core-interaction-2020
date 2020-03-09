


// example for a function:
function adding(number1, number2){
	console.log(number1 + number2)
}

adding(2,2)
adding(20000, -222)





// the timeUnit function takes in a number and an html element:
function timeUnit(output, ourHtmlElement){
	
	// and replace the current seconds value
	if(output < 10){
		ourHtmlElement.innerHTML = "0" + output;
	}else{
		ourHtmlElement.innerHTML = output;	
	}	
}


var minutes = document.getElementById("minutes")
var hours = document.getElementById("hours")


// weekday items
var weekDays = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"]


function weekDay(dayIndex, dayElement){
	dayElement.innerHTML = weekDays[dayIndex] + "day"
}

/* clock function */
function Clock(){

	var currentDate = new Date;

	// each timeUnit calls the timeUnit function from above and 
	// passes a number and html element to set
	
	
	timeUnit(currentDate.getHours(), hours)

	weekDay(currentDate.getDay(), day)
	monthDay.innerHTML = currentDate.getDate()


}

// run the clock function every 10 milliseconds:
setInterval(Clock, 10)

// run the clock function every second:
// setInterval(Clock, 1000)


