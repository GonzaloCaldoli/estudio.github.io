var countdown = document.getElementById("countdown");
var startingMinutes = 30;
var time = startingMinutes * 60;
var timerId;

function updateCountdown() {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdown.innerHTML = minutes + ":" + seconds;

  time--;
  if (time < 0) {
    clearInterval(timerId);
    alerta.play();
  }
}

function startTimer() {
  if (!timerId) {
    timerId = setInterval(updateCountdown, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  time = startingMinutes * 60;
  countdown.innerHTML = startingMinutes + ":00";
}


