
let min = 1;
let max = 100;

let secretNumber = Math.floor((Math.random() * (max - min)) + min);

function checkGuess() {
    let guess = Number(document.getElementById("guess").value);
    let result = document.getElementById("result");

    if (guess < min || guess > max) {
        result.innerText = "Enter a number between 1 and 100!";
    }
    else if (guess === secretNumber) {
        result.innerText = "Correct Guess!";
    }
    else if (guess < secretNumber) {
        result.innerText = "Too Low! Try Again.";
    }
    else {
        result.innerText = "Too High! Try Again.";
    }
}
console.log(secretNumber);  