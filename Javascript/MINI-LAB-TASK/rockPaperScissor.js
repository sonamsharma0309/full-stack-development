
function playGame(userChoice) {
    let choices = ["rock", "paper", "scissors"];

    let random = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[random];

    document.getElementById("userChoice").innerText =
        "Your Choice: " + userChoice;

    document.getElementById("computerChoice").innerText =
        "Computer Choice: " + computerChoice;

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Tie!";
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win!";
    }
    else {
        result = "Computer Wins!";
    }

    document.getElementById("result").innerText = result;
}
