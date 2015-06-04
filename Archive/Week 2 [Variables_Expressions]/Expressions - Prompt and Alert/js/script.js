/**
 * Created by Keri Ritenour
 * Section 1
 * 5/12/15
 * Expressions - Prompt and Alert
 */

//var userInput = prompt("Enter your year of birth");
//console.log(userInput);

var width = prompt("We are calculating the area of a rectangle. \n Please enter the width");
var height = prompt("Please enter the height");
var area = width * height; //calculates with this info
//console.log(area); //prints it out to console

//how to show information to user
//alert("The area of your rectangle is " + area);

//you can also create remove the string and put it in a different variable
var result = ("The area of your rectangle is" + area);
alert(result);