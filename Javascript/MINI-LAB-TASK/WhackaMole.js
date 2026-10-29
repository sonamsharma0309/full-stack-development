
let score = 0;
let timeLeft = 30;
let level = "easy";
let gameRunning = false;
let currentHole = null;
let moleTimeout;
let gameTimer;
let spawnTimer;
let moleCaught = false;

let holes = document.querySelectorAll(".hole");
let levelButtons = document.querySelectorAll(".level");
let scoreDisplay = document.getElementById("score");
let timerDisplay = document.getElementById("timer");
let message = document.getElementById("message");
let startBtn = document.getElementById("startBtn");

let settings = {
    easy: { speed: 1100, visible: 900 },
    medium: { speed: 750, visible: 600 },
    hard: { speed: 450, visible: 320 }
};

levelButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (gameRunning) {
            return;
        }

        level = button.dataset.level;

        levelButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        message.innerText = level.toUpperCase() + " level selected!";
    });
});

function showMole() {
    if (!gameRunning) {
        return;
    }

    holes.forEach(function(hole) {
        hole.classList.remove("mole");
        hole.innerText = "";
    });

    let randomIndex = Math.floor(Math.random() * holes.length);
    currentHole = holes[randomIndex];
    moleCaught = false;

    currentHole.innerText = "🐹";
    currentHole.classList.add("mole");

    moleTimeout = setTimeout(function() {
        if (currentHole) {
            currentHole.classList.remove("mole");
            currentHole.innerText = "";
        }

        currentHole = null;

        if (gameRunning) {
            spawnTimer = setTimeout(showMole, settings[level].speed);
        }
    }, settings[level].visible);
}

holes.forEach(function(hole) {
    hole.addEventListener("click", function() {
        if (
            !gameRunning ||
            hole !== currentHole ||
            moleCaught
        ) {
            return;
        }

        moleCaught = true;
        score++;

        scoreDisplay.innerText = score;
        message.innerText = "🎯 Great hit! Keep going!";

        clearTimeout(moleTimeout);

        hole.classList.remove("mole");
        hole.innerText = "";
        currentHole = null;

        spawnTimer = setTimeout(showMole, settings[level].speed);
    });
});

function startGame() {
    clearInterval(gameTimer);
    clearTimeout(moleTimeout);
    clearTimeout(spawnTimer);

    holes.forEach(function(hole) {
        hole.classList.remove("mole");
        hole.innerText = "";
    });

    score = 0;
    timeLeft = 30;
    gameRunning = true;
    currentHole = null;

    scoreDisplay.innerText = score;
    timerDisplay.innerText = timeLeft;
    message.innerText = "Go! Catch as many moles as you can!";
    startBtn.innerText = "↻ Restart Game";

    showMole();

    gameTimer = setInterval(function() {
        timeLeft--;
        timerDisplay.innerText = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    gameRunning = false;

    clearInterval(gameTimer);
    clearTimeout(moleTimeout);
    clearTimeout(spawnTimer);

    holes.forEach(function(hole) {
        hole.classList.remove("mole");
        hole.innerText = "";
    });

    currentHole = null;
    message.innerText = "🏆 Game Over! Your score: " + score;
    startBtn.innerText = "▶ Play Again";
}

startBtn.addEventListener("click", startGame);
