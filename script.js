let timeLeft = 15;
const timerEl = document.getElementById("timer");
const circle = document.querySelector(".progress-ring__circle");
const circumference = 2 * Math.PI * 60;

circle.style.strokeDasharray = circumference;

function setProgress(time) {
    const offset = circumference - (time / 15) * circumference;
    circle.style.strokeDashoffset = offset;
}

const countdown = setInterval(() => {
    timeLeft--;
    timerEl.innerText = timeLeft;
    setProgress(timeLeft);

    if (timeLeft <= 0) {
        clearInterval(countdown);
        window.location.href = "https://t.me/+8Z538lZud9Q1MDQ1";
    }
}, 1000);
