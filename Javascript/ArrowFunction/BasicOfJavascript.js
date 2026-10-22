//console.log("Hello World!");
//var a;//global variable
//let b;//local variable
//const c; //for constants, you must assign a value at the time of declaration

//console.log(a);
//let a=5;// temporal dead zone, you cannot access a variable before it is declared
/**
for(let i=0;i<5;i++){
    console.log(i);
}
/**
 * 
 * Primary data types in JavaScript
 * number
 * string
 * boolean
 * undefined
 * null
 * symbol
 */ 








/**
let a=5;
console.log(typeof a);
a="sonam";
console.log(typeof a);
a=true;
console.log(typeof a);
a=null;     
console.log(typeof a); //object
a=undefined;
console.log(typeof a);
a=Symbol("id");
console.log(typeof a);
*/







/** 

console.log(1+1+1+"1"); //31
var a=1;
console.log(a+a+a+String(a)); //31
var b=1;
console.log(Number.parseInt("1")+Number.parseInt("1")+Number.parseInt("1")+String(Number.parseInt("1"))); //31
 */ 











// WAP in js of armstrong no 
/** 
let num = 153;
let temp = num;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum = sum + digit * digit * digit;
    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");
}
*/
