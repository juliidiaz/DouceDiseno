var endDate = new Date("2023-11-18T15:00:00Z");

function updateCountdown() {
  var currentDate = new Date();
  var timeRemaining = endDate - currentDate;

  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  var daysElement = document.getElementById("days");
  var hoursElement = document.getElementById("hours");
  var minutesElement = document.getElementById("minutes");
  var secondsElement = document.getElementById("seconds");

  if (daysElement) {
    daysElement.innerHTML = days;
  }
  if (hoursElement) {
    hoursElement.innerHTML = hours;
  }
  if (minutesElement) {
    minutesElement.innerHTML = minutes;
  }
  if (secondsElement) {
    secondsElement.innerHTML = seconds;
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);