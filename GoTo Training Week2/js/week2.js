/**
 * Keri Ritenour
 * 5/13/15
 * Section 1
 * GoTo Training Week 2
 */


//alert("Testing to see if connected.");

//Create an age calculator

//Ask the user their name
var name = prompt("Please type in your name:");
//console log the name to check it
console.log(name);

//Alert the user and say welcome and explain what we are doing.
alert("Welcome" +name+" let's figure out how old you are!");

//Ask the user what year they were born in
//create a variable to catch the answer
var yearBorn = prompt("What year were you born?");
console.log(yearBorn);

//Calculate the user's age

//We need to know the current year
var currentYear = 2015;

var age = currentYear - yearBorn -1;

//alert user with their age
alert(name + "you are" +age+ "years old.");

//Make this more complex!!!
//Find the users future age
var yearsMore = prompt("How many years in the future would you like to know?");
//console.og the years more
console.log(yearsMore);

//Calculate the future age
//Cast the yearsMore variable as a number
var futureAge = age + Number (yearsMore);
console.log(futureAge);