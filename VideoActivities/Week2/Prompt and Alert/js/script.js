/**
 * Keri Ritenour
 * 6/9/15
 * Section 02
 * Week 2 - Prompt and Alert
 */

//alert("Testing to see if connected");

prompt("Enter your year of birth:");  //not stored anywhere so to capture it we need to assign it to a variable

var userInput = prompt("Enter your year of birth:"); //prompts user and stores it
console.log(userInput); //prints so you can see it  - but user cannot see it

var width = prompt("We are calculating the area of a rectangle. \nPlease enter the width:");
var height = prompt("Please enter the height:");
//the above lets you enter the information and saves it

var area = width * height; //calculates information from prompt entry
//console.log(area); //prints it out to the console

var result = ("The area of your rectangle is " + area + " sq feet.");
alert(result);
