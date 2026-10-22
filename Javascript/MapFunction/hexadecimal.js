
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let num = document.getElementById("num").value;

    if (num === "") {
        alert("Please enter a number!");
        return;
    }

    num = Number(num);

    let binary = num.toString(2);
    let hex = num.toString(16).toUpperCase();

    document.getElementById("binary").innerText = binary;
    document.getElementById("hex").innerText = hex;
});
