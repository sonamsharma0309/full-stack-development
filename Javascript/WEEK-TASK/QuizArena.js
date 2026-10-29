
const questions = [
    {
        question: "Which keyword declares a variable in JavaScript?",
        options: ["int", "let", "string", "char"],
        answer: 1,
        explanation: "let is used to declare a block-scoped variable in JavaScript."
    },
    {
        question: "Which method prints output in the console?",
        options: ["print()", "echo()", "console.log()", "display()"],
        answer: 2,
        explanation: "console.log() displays messages and values in the browser console."
    },
    {
        question: "Which symbol is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: 2,
        explanation: "=== compares both value and data type without type conversion."
    },
    {
        question: "Which of these is NOT a JavaScript data type?",
        options: ["Number", "Boolean", "Character", "String"],
        answer: 2,
        explanation: "JavaScript has no separate Character data type. A single character is stored as a string."
    },
    {
        question: "What is the result of 2 + '3'?",
        options: ["5", "23", "NaN", "Error"],
        answer: 1,
        explanation: "The number 2 is converted to a string, so the result is '23'."
    },
    {
        question: "Which keyword declares a constant?",
        options: ["var", "let", "const", "constant"],
        answer: 2,
        explanation: "const declares a variable that cannot be reassigned."
    },
    {
        question: "Which method converts JSON text into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
        answer: 0,
        explanation: "JSON.parse() converts a valid JSON string into a JavaScript value."
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        answer: 1,
        explanation: "push() adds one or more elements to the end of an array."
    },
    {
        question: "What does typeof 10 return?",
        options: ["integer", "float", "number", "Number"],
        answer: 2,
        explanation: "typeof returns the string 'number' for numeric values."
    },
    {
        question: "Which loop runs while a condition is true?",
        options: ["if", "while", "switch", "case"],
        answer: 1,
        explanation: "A while loop repeats as long as its condition evaluates to true."
    },
    {
        question: "Which operator represents logical AND?",
        options: ["||", "!", "&&", "&"],
        answer: 2,
        explanation: "&& returns a truthy or falsy result based on both operands."
    },
    {
        question: "Which method removes the last array element?",
        options: ["shift()", "pop()", "slice()", "splice()"],
        answer: 1,
        explanation: "pop() removes and returns the last element of an array."
    },
    {
        question: "What is the result of Boolean(0)?",
        options: ["true", "false", "0", "undefined"],
        answer: 1,
        explanation: "Zero is a falsy value, so Boolean(0) returns false."
    },
    {
        question: "Which keyword is used to define a function?",
        options: ["func", "method", "function", "define"],
        answer: 2,
        explanation: "The function keyword declares a function in JavaScript."
    },
    {
        question: "Which method selects an element by its ID?",
        options: [
            "document.getElementById()",
            "document.getClass()",
            "document.selectId()",
            "document.getName()"
        ],
        answer: 0,
        explanation: "getElementById() selects the element with the specified ID."
    },
    {
        question: "What does NaN stand for?",
        options: ["No assigned number", "Not a Number", "New and Null", "Negative number"],
        answer: 1,
        explanation: "NaN means Not a Number and represents an invalid numeric result."
    },
    {
        question: "Which method creates a new array by transforming each element?",
        options: ["filter()", "find()", "map()", "reduce()"],
        answer: 2,
        explanation: "map() applies a callback to each element and returns a new array."
    },
    {
        question: "Which method returns the first element that matches a condition?",
        options: ["find()", "map()", "join()", "forEach()"],
        answer: 0,
        explanation: "find() returns the first matching element, or undefined if none is found."
    },
    {
        question: "What does setTimeout() do?",
        options: [
            "Repeats code forever",
            "Runs code after a delay",
            "Stops JavaScript",
            "Creates a loop"
        ],
        answer: 1,
        explanation: "setTimeout() schedules a callback to run after a specified delay."
    },
    {
        question: "Which event occurs when a button is clicked?",
        options: ["change", "hover", "click", "load"],
        answer: 2,
        explanation: "The click event occurs when the user clicks an element."
    },
    {
        question: "What is the result of 10 % 3?",
        options: ["3", "1", "0", "3.33"],
        answer: 1,
        explanation: "The remainder operator % returns the remainder after division."
    },
    {
        question: "Which value represents an intentional absence of a value?",
        options: ["null", "true", "1", "NaN"],
        answer: 0,
        explanation: "null is commonly used to represent an intentional absence of a value."
    },
    {
        question: "Which method combines array elements into a string?",
        options: ["split()", "join()", "concatAll()", "combine()"],
        answer: 1,
        explanation: "join() combines array elements into a string using a separator."
    },
    {
        question: "What is the result of 5 === '5'?",
        options: ["true", "false", "5", "Error"],
        answer: 1,
        explanation: "The values have different data types, so strict equality returns false."
    },
    {
        question: "Which statement skips the current loop iteration?",
        options: ["break", "return", "continue", "stop"],
        answer: 2,
        explanation: "continue skips the remaining code in the current iteration and moves to the next one."
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;
let answered = false;
let wrongAnswers = [];

const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const reviewScreen = document.getElementById("reviewScreen");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const explanationElement = document.getElementById("explanation");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    clearInterval(timer);
    answered = false;
    timeLeft = 30;

    let q = questions[currentQuestion];

    progressText.innerText =
        "Q " + (currentQuestion + 1) + "/" + questions.length;

    progressBar.style.width =
        (currentQuestion / questions.length * 100) + "%";

    questionElement.innerText = q.question;
    optionsElement.innerHTML = "";
    explanationElement.style.display = "none";
    nextBtn.disabled = true;
    nextBtn.style.opacity = "0.5";

    timerElement.innerText = timeLeft;

    q.options.forEach(function(option, index) {
        let button = document.createElement("button");

        button.className = "option";
        button.innerText =
            String.fromCharCode(65 + index) + ". " + option;

        button.addEventListener("click", function() {
            checkAnswer(index);
        });

        optionsElement.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        timerElement.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);

            if (!answered) {
                checkAnswer(-1);
            }
        }
    }, 1000);
}

function checkAnswer(selectedIndex) {
    if (answered) {
        return;
    }

    answered = true;
    clearInterval(timer);

    let q = questions[currentQuestion];
    let buttons = optionsElement.querySelectorAll(".option");

    buttons.forEach(function(button) {
        button.disabled = true;
    });

    buttons[q.answer].classList.add("correct");

    if (selectedIndex === q.answer) {
        score++;
        scoreElement.innerText = score;
    } else {
        if (selectedIndex !== -1) {
            buttons[selectedIndex].classList.add("wrong");
        }

        wrongAnswers.push({
            question: q.question,
            options: q.options,
            answer: q.answer,
            selected: selectedIndex,
            explanation: q.explanation
        });
    }

    if (selectedIndex === -1) {
        explanationElement.innerHTML =
            "<strong>⏰ Time's up!</strong> Correct answer: " +
            q.options[q.answer];
    } else if (selectedIndex === q.answer) {
        explanationElement.innerHTML =
            "<strong>✅ Correct!</strong> " + q.explanation;
    } else {
        explanationElement.innerHTML =
            "<strong>❌ Incorrect!</strong> " + q.explanation;
    }

    explanationElement.style.display = "block";

    nextBtn.disabled = false;
    nextBtn.style.opacity = "1";

    if (currentQuestion === questions.length - 1) {
        nextBtn.innerText = "See Results →";
    }
}

nextBtn.addEventListener("click", function() {
    if (!answered) {
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        nextBtn.innerText = "Next →";
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    clearInterval(timer);

    quizScreen.classList.add("hidden");
    reviewScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    progressBar.style.width = "100%";

    document.getElementById("finalScore").innerText =
        score + " / " + questions.length;

    let percentage = (score / questions.length) * 100;
    let rating;

    if (percentage >= 80) {
        rating = "🌟 Excellent!";
    } else if (percentage >= 60) {
        rating = "👏 Good Job!";
    } else if (percentage >= 40) {
        rating = "👍 Keep Practicing!";
    } else {
        rating = "💪 Don't Give Up!";
    }

    document.getElementById("rating").innerText = rating;

    document.getElementById("resultMessage").innerText =
        "You scored " + percentage + "% and got " +
        (questions.length - wrongAnswers.length) +
        " questions correct.";
}

document.getElementById("reviewBtn").addEventListener("click", function() {
    resultScreen.classList.add("hidden");
    reviewScreen.classList.remove("hidden");

    let wrongList = document.getElementById("wrongList");
    wrongList.innerHTML = "";

    if (wrongAnswers.length === 0) {
        wrongList.innerHTML = "<p>🎉 Perfect score! No wrong answers.</p>";
        return;
    }

    wrongAnswers.forEach(function(item, index) {
        let div = document.createElement("div");
        div.className = "review-item";

        let chosenAnswer = item.selected === -1
            ? "Not answered (time's up)"
            : item.options[item.selected];

        div.innerHTML =
            "<h3>" + (index + 1) + ". " + item.question + "</h3>" +
            "<p><strong>Your answer:</strong> " + chosenAnswer + "</p>" +
            "<p><strong>Correct answer:</strong> " +
            item.options[item.answer] + "</p>" +
            "<p><strong>Explanation:</strong> " +
            item.explanation + "</p>";

        wrongList.appendChild(div);
    });
});

document.getElementById("backBtn").addEventListener("click", function() {
    reviewScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
});

function restartQuiz() {
    clearInterval(timer);

    currentQuestion = 0;
    score = 0;
    timeLeft = 30;
    answered = false;
    wrongAnswers = [];

    scoreElement.innerText = "0";
    nextBtn.innerText = "Next →";

    quizScreen.classList.remove("hidden");
    resultScreen.classList.add("hidden");
    reviewScreen.classList.add("hidden");

    loadQuestion();
}

document.getElementById("restartBtn").addEventListener("click", restartQuiz);
document.getElementById("playAgainBtn").addEventListener("click", restartQuiz);
document.getElementById("reviewRestartBtn").addEventListener("click", restartQuiz);

loadQuestion();
