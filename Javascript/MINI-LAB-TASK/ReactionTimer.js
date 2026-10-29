
let screen = document.getElementById("screen");
let startBtn = document.getElementById("startBtn");
let result = document.getElementById("result");

let timeout;
let startTime;
let state = "idle";

function startGame() {
    clearTimeout(timeout);

    state = "waiting";
    screen.className = "";
    screen.innerText = "Wait for Green...";
    result.innerText = "";
    startBtn.disabled = true;

    let delay = Math.floor(Math.random() * 3000) + 2000;

    timeout = setTimeout(function() {
        state = "ready";
        screen.className = "ready";
        screen.innerText = "CLICK NOW!";
        startTime = Date.now();
    }, delay);
}

screen.addEventListener("click", function() {
    if (state === "waiting") {
        clearTimeout(timeout);

        state = "early";
        screen.className = "early";
        screen.innerText = "Too Early!";
        result.innerText = "Wait for the screen to turn green.";
        startBtn.disabled = false;
    }
    else if (state === "ready") {
        let reactionTime = Date.now() - startTime;

        state = "finished";
        screen.className = "";
        screen.innerText = "Well Done!";
        result.innerText = "Your reaction time: " + reactionTime + " ms";
        startBtn.disabled = false;
    }
});

startBtn.addEventListener("click", startGame);
