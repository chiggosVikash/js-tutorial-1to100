/// we have declared a variable but not assigned any value to it

// let a = 10;
// let b = 20;
// let c = a + b;
// console.log(c); // 30

// const x = 10;
// x = 20;
// console.log(x); // TypeError: Assignment to constant variable.

/// numbers in js
let num = 10;
let num1 = 10.5;

const sum = num + num1;
const mult = num * num1;
const div = num / num1;
const sub = num - num1;
console.log(sub); // 0.5
console.log(div); // 0.5
console.log(mult); // 105.0
console.log(sum); // 20.5
//"abc"- string
// 012 - index
/// strings in js
let firstName = "Vikash";
let lastName = "Kumar";

let myName = "My Name";


// let fullName = firstName +" "+lastName;
// console.log(firstName[5]); // h
// console.log(fullName); // Vikash Kumar

/// assignment
// findout V and h

/// dev 
let firstChar = firstName[0];
let lastCharOfFirstName = firstName[5];
console.log(firstChar+lastCharOfFirstName); // V
// console.log(lastCharOfFirstName); // h


// console.log("K n Singth " + firstName[0]+firstName[6]);

/// boolean in js
// let isPublished = false;
let isLoggedIn = false;

let shushu = null;

console.log(shushu);

if(isLoggedIn){
    console.log("User is logged in");
}else{
    console.log("User is not logged in");
}


console.log(myName);




