let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
    document.write("FizzBuzz");
} else if (num % 3 === 0) {
    document.write("Fizz");
} else if (num % 5 === 0) {
    document.write("Buzz");
} else {
    document.write(num);
}