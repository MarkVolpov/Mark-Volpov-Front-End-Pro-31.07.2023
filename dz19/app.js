let [hours,minutes,seconds] = [0,0,0];

let stopwatch = document.querySelector(".time")
let timer = null;

function stopwatchTime() {
    seconds++
    if(seconds == 60) {
        seconds = 0;
        minutes++
        if(minutes == 60) {
            minutes = 0;
            hours++
        }
    }
    let second = seconds < 10 ? "0" + seconds : seconds;
    let minute = minutes < 10 ? "0" + minutes : minutes;
    let hour = hours < 10 ? "0" + hours : hours;
    stopwatch.innerHTML = `${hour}:${minute}:${second}`;
}

function stopwatchStart() {
    if(timer!== null) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatchTime,1000)
}

function stopwatchStop() {
    clearInterval(timer)
}

function stopwatchReset() {
    clearInterval(timer);
    [hours,minutes,seconds] = [0,0,0];
    stopwatch.innerHTML = "00:00:00"
}