
let icons = ["🍎", "🍌", "🍇", "🍒", "🍕", "⚽", "🚀", "🐱"];

let board = document.getElementById("board");
let scoreDisplay = document.getElementById("score");
let movesDisplay = document.getElementById("moves");
let message = document.getElementById("message");
let restartBtn = document.getElementById("restart");

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let score = 0;
let moves = 0;
let matchedPairs = 0;
let hideTimeout;

function startGame() {
    clearTimeout(hideTimeout);

    board.innerHTML = "";
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    score = 0;
    moves = 0;
    matchedPairs = 0;

    scoreDisplay.innerText = score;
    movesDisplay.innerText = moves;
    message.innerText = "Flip two cards to find a match!";

    let cards = [...icons, ...icons];

    cards.sort(function() {
        return Math.random() - 0.5;
    });

    cards.forEach(function(icon) {
        let card = document.createElement("button");

        card.className = "card";
        card.innerText = "?";
        card.dataset.icon = icon;

        card.addEventListener("click", function() {
            flipCard(card);
        });

        board.appendChild(card);
    });
}

function flipCard(card) {
    if (
        lockBoard ||
        card.classList.contains("open") ||
        card.classList.contains("matched")
    ) {
        return;
    }

    card.innerText = card.dataset.icon;
    card.classList.add("open");

    if (firstCard === null) {
        firstCard = card;
        return;
    }

    secondCard = card;
    moves++;
    movesDisplay.innerText = moves;

    if (firstCard.dataset.icon === secondCard.dataset.icon) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        firstCard.classList.remove("open");
        secondCard.classList.remove("open");

        score++;
        matchedPairs++;

        scoreDisplay.innerText = score;
        message.innerText = "🎉 Match found!";

        firstCard = null;
        secondCard = null;

        if (matchedPairs === icons.length) {
            message.innerText = "🏆 You Won! All pairs matched!";
        }
    }
    else {
        lockBoard = true;
        message.innerText = "Not a match! Try again.";

        hideTimeout = setTimeout(function() {
            firstCard.innerText = "?";
            secondCard.innerText = "?";

            firstCard.classList.remove("open");
            secondCard.classList.remove("open");

            firstCard = null;
            secondCard = null;
            lockBoard = false;
        }, 800);
    }
}

restartBtn.addEventListener("click", startGame);

startGame();
