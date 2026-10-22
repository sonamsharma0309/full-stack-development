let arr =[1,2,3,4,5,];
console.log(arr);
//Map 
let newArr = arr.map((num) => num * num);
console.log(newArr);

//Filter
let filteredArr = arr.filter((num) => num % 2 === 0);
console.log(filteredArr);

//Find
let foundNum = arr.find((num) => num > 3);
console.log(foundNum);

let total = arr.reduce((acc, num) => acc + num, 0);
console.log(total);

