// fading in the top section on load
$(document).ready(function(){
    $("#fade_on_load").hide().fadeIn("3000");
  });

//display clock  
function startTime() {
  const today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById('clock_display').innerHTML =  hour + ":" + min + ":" + sec;
  setTimeout(startTime, 1000);
}

//clock - setting zeros in front of numbers < 10
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

//display date
function todayDate() {
  const today = new Date();
  let mon = new Array("January","February","March","April","May","June","July","August","September"
  ,"October","November","December");

  document.getElementById('date_display').innerHTML = mon[today.getMonth()] + " " + today.getDay()
   + ", " + today.getFullYear();
  setTimeout(todayDate, 1000);
}

//start functions upon page load
function dayStart() {
  startTime();
  todayDate();
}