let arr =[1,2,3,4,5];
console.log(arr);
//Map 
let newArr = arr.map((num) => num * num);
console.log(newArr);

//Filter    

newArr =arr.filter((num) => num % 2 === 0);
console.log(newArr);

//find
newArr = arr.find((num) => num > 3);
console.log(newArr);

//reduce
newArr = arr.reduce((sum,num)=> sum+=num ,0);
console.log(newArr);