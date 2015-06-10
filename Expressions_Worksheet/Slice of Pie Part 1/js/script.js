/**
 * Keri Ritenour
 * 6/9/15
 * Section 02
 * Expressions Worksheet - Slice of Pie Part 1
 */

//alert("Testing to see if connected");

/*
 A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza each partygoer will get at the party. (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)

 Given:
    Number of slices per pizza
    Number of people at the party
    Number of pizzas ordered.

 Result Variables:
    Number of slices per person. (Can be a decimal or floating point).

 Result to Print:
    “Each person ate X slices of pizza at the party.”
 */

//create variables for slices of pizza, number of people, and number of pizza ordered
var slicePizza = 10;
var partyPeople = 20;
var pizzaOrdered = 5;

//calculation of number of slices per person
var result = (slicePizza * pizzaOrdered) / partyPeople;

//print to console
console.log("Each person ate " +result+ " slices of pizza at the party.");

/*
    Entered 8 slices of pizza, 4 people, and 10 ordered and got 20 slices of pizza
    Entered 10 slices of pizza, 8 people, and 4 ordered and got 5 slices of pizza
    Entered 10 slices of pizza, 20 people, and 5 ordered and got 2.5 slices of pizza

 */