
var counter = 0;
var hourCounter = 0;



var hours = document.getElementById("oh");



function Clock(){

  var currentDate = new Date;

  timeUnit(currentDate.getHours(), hours)


  weekDay(currentDate.getDay(), day)

  monthDay.innerHTML = currentDate.getDate()

}


setInterval(Clock, 1000);