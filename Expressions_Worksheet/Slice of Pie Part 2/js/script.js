/**
 * Keri Ritenour
 * 6/9/15
 * Section 02
 * Expressions Worksheet - Slice of Pie Part 2
 */

//alert("Testing to see if connected");

/*
 At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the
 slices have been divided up evenly among the guests. Assume guests get whole slices, how many
 whole slices will Sparky feast on?

 Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices
 and Sparky gets 2 slices. (Note that this is an example, your code should work and give me the
 accurate results no matter what numbers I put in for those given variables.)

 Given:
    Don’t make new given variables/constants for this. Instead use the givens you set up for Slice of Pie I.

 Result Variables:
    Number of slices Sparky gets to eat.

 Result to Print:
    “Sparky got X slices of pizza.”
 */

//create variables for slices of pizza, number of people, and number of pizza ordered
var slicePizza = 8;
var partyPeople = 5;
var pizzaOrdered = 2;

//calculation of number of slices per person
var result = slicePizza * pizzaOrdered;
var remainder = result % partyPeople;

//print to console
console.log("Sparky got " +remainder+ " slices of pizza.");

/*
 Entered 10 slices of pizza, 20 people, and 5 ordered and got 5 slices of pizza for Sparky
 Entered 8 slices of pizza, 13 people, and 4 ordered and got 6 slices of pizza for Sparky
 Entered 8 slices of pizza, 5 people, and 2 ordered and got 1 slices of pizza for Sparky
*/
