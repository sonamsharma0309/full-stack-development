
let btn = document.getElementById("btn");
let count = 0;

btn.addEventListener("click", () => {
    count++;
    document.getElementById("ContainerValue").innerText = count;
});

let time = 15 * 60;
let interval;

let timer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let snoozeBtn = document.getElementById("snoozeBtn");
let resetBtn = document.getElementById("resetBtn");

function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timer.innerText =
        minutes + ":" + String(seconds).padStart(2, "0");
}

function startTimer() {
    if (interval) return;

    if (time <= 0) {
        time = 15 * 60;
    }

    interval = setInterval(() => {
        time--;
        updateTimer();

        if (time <= 0) {
            clearInterval(interval);
            interval = null;

            setTimeout(() => {
                alert("Time is up!");
            }, 1000);
        }
    }, 1000);
}

startBtn.addEventListener("click", startTimer);

snoozeBtn.addEventListener("click", () => {
    time += 60;
    updateTimer();
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    time = 15 * 60;
    updateTimer();
});
