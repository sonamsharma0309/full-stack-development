let scores = [80, 90, 70, 85, 75];

let total = 0;

for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];
}

let average = total / scores.length;

console.log(average);