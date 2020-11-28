window.onload = function () {
  var tens = 00;
  var sec = 00;
  var appendTens = document.getElementById("tens");
  var appendSec = document.getElementById("seconds");
  var startButton = document.getElementById("start");
  var stopButton = document.getElementById("stop");
  var resetButton = document.getElementById("reset");
  var Interval;

  startButton.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  stopButton.onclick = function () {
    clearInterval(Interval);
  };

  resetButton.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    sec = "00";
    appendSec.innerHTML = sec;
    appendTens.innerHTML = tens;
  };

  function startTimer() {
    tens++;
    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    } else {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      sec++;
      appendSec.innerHTML = sec;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
