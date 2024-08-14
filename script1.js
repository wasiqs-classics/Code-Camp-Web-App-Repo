// // ADVANCE TOPICS FOR JS FOR REACT

// // 1. ARROW FUNCTIONS & ANONYMOUS FUNCTIONS

// function function_name() {
//     // function code
// }

// const DoSomething = () => {
//     return console.log("Hello world");
// }

// const ArgumentFunction = (arg1, arg2) = {
//     // function body
// }

// // Hello Username

// const HelloWorld = name => console.log("Hello" + name);

// // Importing & Exporting JS FUNCTIONS

// export default function DoSomething(){

// }

// // exporting arrow functions

// export const DoSomething1 = () => {}

// // Import 

// // import DoSomething from Source;

// // Ternary Operation 

// if (true) {
//     // do something
// } else {
//     // do this
// }

// let userName = prompt("Enter your name: ");
// let passWord = prompt("Enter your password: ");

// let loginStatus = (userName === "admin" && passWord === "admin123") ? true : false;
// if (loginStatus) {alert("WELCOME ADMIN")}

// OOP - Object Oriented Programming 
// Classes - Blueprint to create an object (MAP FOR BUILDING A HOUSE)
// Objects - Actual instances of the classes (ACTUAL HOUSE BUILD ON THE MAP)

// Class: Class Members (Properties + Methods)
// Constructor 

class Car {
    constructor(make,model,status){
        this.make = make;
        this.model = model;
        this.status = status;
    }
    // Methods
    ignition(){
        console.log(this.make + this.model + 'starting now ... hmmmm');
    }
}

// TO USE A CLASS, WE HAVE TO CREATE AN OBJECT. 

const myCar = new Car("Toyota","Corolla","New");
myCar.ignition(); 

// DATA STRUCTURE (Object + Array)

// Object - Key: Value pairs 

const Person = {
    name: "Wasiq",
    age: 37,
    isMarried: true
};

alert("Hello " + Person.name)

// Arrays - Collection of similar data 

let fruits = ["apple", "banana", "mango"];
console.log(fruits[1]);

fruits.push("cherry");

fruits.pop();

delete fruits[1];

// De - Structuring an Object

// const name = Person.name;
// const age = Person.age;
// const maritalStatus = Person.isMarried;

// Shortcut 

const { name, age, isMarried } = Person;

console.log(isMarried);

let { naam, country, job } = {naam: "Wasiq", country: "Pak", job: "Teaching"};

// Creating object from Variables

const player1 = "Babar";
const player2 = "Rizwan";
const player3 = "Shaheen";

const Players = {
    player1,
    player2,
    player3
}

//  SPREAD OPERATOR.
// The spread operator allows us to copy all the parts of an array / object into another array / object

const Person1 = {name: "Wasiq", degree: "Mechancal", bacth: 2011};
const Person2 = {...Person1, name: "Faisal"};

// it can also spread an iterable into its elements

const sum = (a,b,c) => {return a+b+c;}

const number = [1,2,3]
console.log(sum(...number));

// It can also be used to combine arrays:

const array1 = ["Hello", "World"];
const array2 = ["Learning", "JS"];
const combinedArray = [...array1, ...array2];

// Practical Usecase

//const oldChat = [message1, message2, message3];
// const new_message = "New Message";
// const updated_message = [...oldChat, new_message];

// MAP, FILTER, REDUCE
// MAP()
const usernames = ["wasiq.khan", "john-doe", "abc_alpha", "lucygrey"]

// Method1: Function is created separately

function makeEmail1(username) {
    return username + "@company.com";
}

const email_list1 = usernames.map(makeEmail1);

// Method 2: Making functions within the map

const email_list2 = usernames.map(function emailMaker(username){return username + "@job.com";})

// Method 3 - Arrays functions 

const email_list3 = usernames.map(user => user + "@business.com");

// FILTER()

const ages = [23, 4, 14, 52, 19];

const adults = ages.filter(age => age >= 18);

const users = [
    {
        id: 1,
        name: "Wasiq",
        age: 37
    },
    {
        id: 2,
        naam: "Khan",
        age: 13
    },
    {
        id: 3,
        name: "Ali",
        age: 55
    }
]

const adult_users = users.filter(user => user.age >= 18);

// REDUCE()
// Combines all elements in an array into a single result based on a func
// 1. Reducer function
// a. Accumulator - carries the return value of the prev iteration. 
// b. Current Value - 
// 2. Initial Value (option)

const numbers = [1,2,3,4,5];
const sum1 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum1);
