"use strict";


function digitalClock() {
	let time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	var session = "AM";
	
	if ( hours > 12 ) {
		hours = hours - 12;
		session = "PM";
	}
	
	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;
	
	document.getElementById("clock").innerHTML= hours+" : "+minutes+" : "+seconds+" "+session;
}




setInterval(digitalClock, 1000)