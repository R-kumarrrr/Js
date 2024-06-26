"use strict" // treat all js code as newer version

//alert(3+3) // we are using nodejs not browser

console.log(3
    +
    3);

console.log("Rajat"); // Code readability should be there.

let name = "Rajat";
let age = 20;
// let isLoggedIn = true;
let state;

// Number => 2 to power 52
// bigint (number greater than number's range)
// String => "" or '';
// boolean => True/False
// null => stand alone value
// undefined => not defined/assigned yet
//symbol => unique

//object 

console.log(typeof undefined); undefined
console.log(typeof null); Object

// *********************** Summary ***********************


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Rajat",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3