/**
 * Keri Ritenour
 * 5/13/15
 * Section 1
 * Activity: Expression Worksheet - Slice of Pie Part 2
 */

//alert("Testing to see if connected.");

//Calculate the remainder of the slices of pizza Sparky will get if a person only eats whole slices
var pizzaSlice=50;
var people=16;

//divide the number of slices of pizza by the number of people to get the number Sparky gets to eat
var result= pizzaSlice / people;
var remainder= pizzaSlice % people;

//print out the number of slices each person will get
console.log("Sparky got " +remainder+ " slices of pizza");