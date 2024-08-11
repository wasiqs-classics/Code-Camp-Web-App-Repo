function jsfunction() {
            alert("Script is Called");
}

// variables 

// var functional scope 
// let block scope 

function run() {
    var name1 = "Alpha";
    let name2 = "Beta";
    console.log(name1, name2);

    {
        var name3 = "Gamma";
        let name4 = "Omega";
        console.log(name3, name4);
    }

    console.log(name3);
    console.log(name4);
}

// run();

const PI = 3.142;

// Data types
// 1. String
let userName = "Wasiq";
let Nationality = 'Pakistani';

// String Literals 

let message = `Hello ${userName}`;
//alert(message);

// 2. Numbers

let age = 37; // integer 
let temp = -10; // int

let conversionRate = 275.37; // float

// 3. Boolean 

let inWeekend = false;
let isRegistered = true;

// Objects 

let person = {
    name: 'Wasiq',
    age: 37,
    education: "BE Mechanical" 
};

let name1 = person.name;
let age1 = person.age;

// Null

let Value = null;

// Undefined

let value2;
console.log(value2);

// Symbol 

let sym1 = Symbol('this is a symbol');
let sym2 = Symbol('this is a symbol');

console.log(sym1 === sym2); 

// Operators

// 1. Arithematic Operators
console.log(10+30);

// 2. Comparison Operators

let a = 10;
let b = 15;
let c = '10';

console.log(a == b);
console.log(b > a);
console.log(a == c);
console.log(a === c);

// 3. Logical Operators

console.log(a === c && b > a); // and is true if all conditions are true
console.log(a === c || b > a);
console.log(a != b);

// 4. Assignment Operators
let value1 = 10;
value1 += 10; // value1 = value1 + 10;

// CONDITIONAL STATEMENTS

// 1. IF - ELSE 

let temperature = 22;

if (temperature > 30) {
    console.log("The temperature is high");
} else {
    console.log("The temperature is Ok");
}

// 2. Multiple If Statements

let score = 86;

if (score >= 90) {
    console.log("Grade: A+");
} else if (score >= 80){
    console.log("Grade: A");
} else if (score >= 70) {
    console.log("Grade: B");
} else {
    console.log("Sorry!");
}

// 3. Nested If Statements

let nationality = 'Pakistani';
let gender = 'Female';

if (nationality === 'Pakistani'){
    if (gender === 'Male'){
        console.log('You are a Paksitani Male');
    } else {
        console.log('You are a Pakistani Female');
    }
} else {
            console.log("You are not a Pakistani");
}

// Ternary Operation

let userAge = 18;
let canVote = userAge >= 18 ? "You can vote" : "You cannot vote";
console.log(canVote);

// LOOPS

// 1. While Loop

let i = 0;
while (i < 5) {
    console.log(i);
    i++; // ++ is increament
}

// 2. For Loop

for (let i = 0; i < 5; i++){
    console.log(`Value: is ${i}`);
}

// 3. FOR OF LOOP
// Used often to iterate over some iterable object / collection 

let players = ["Player1", "Player2", "Player3"];
for (let player of players){
    console.log(player);
}

// Break and Continue Statements
// Break statement breaks the loop
// Continue statement breaks the iteration 

for (let i = 0; i < 10; i++){
    if (i === 5){
        continue;
    }
    console.log(`The current value is: ${i}`);
}

// Functions
// 1. Function's definition / declaration 
// functions declaration, functions expressions, arrow functions
// 2. Function's calling or invoking

// A. FUNCTION DECLARATION 
function add(a,b){
    return a+b;
}

function alertistan(){
    alert("HELLO");
}

alertistan();

// function call / invoke
//alert(add(4,7));

// B. Function Expression

const multiply = function(x,y) {
    return x * y;
}

//console.log(multiply(10,20));

// C. Arrow Function

const subtract = (m,n) => m - n; // we have defined an arrow function subtract

console.log(subtract(10,6));

// Multiple Return Values 

const calcAreaPerimeter = function(length, width){
    let area = length * width;
    let perimeter = 2 * (length + width);

    return {a: area, p: perimeter};
}

let rectangle = calcAreaPerimeter(4,6);
console.log("Area is: " + rectangle.a);
console.log("Perimeter is: " + rectangle.p);


//Scope
// Global Scope
let globalVariable = "Me global";

function example(){
    console.log(globalVariable);
}

example();

// Functional Scope

function exampleFunction(){
    let functionVariable = "Me functional only";
    console.log(functionVariable);
}

exampleFunction();
// console.log(functionVariable);


// Block Scope

if(true) {
    let blockVariable = "ME Block";
    console.log(blockVariable);
}

// console.log(blockVariable);

// Lexical Scope

function outerFunc(){
    let outerVarible = "ME Outer";

    function innerFunc(){
        console.log(outerVarible);
    }

    innerFunc();
}

outerFunc();