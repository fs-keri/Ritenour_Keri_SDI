/**
 * Keri Ritenour
 * 6/10/15
 * Section 02
 * Expressions Assignment
 */

//alert("Testing to see if connected");

//Online Ordering System alert to user
alert("Welcome to LAPBAGS Online Ordering! \nTo place an order select OK.");

//create array to hold the price of each bag style
var bagStyle = [150, 175, 200, 225, 250];

//prompt user to select the product number of the bag they want to purchase
var userStyleSelection = prompt("Enter the product number corresponding to the bag style you would like to purchase: \nProduct #0  Go Bag $150 \nProduct #1  On-the-Go $175 \nProduct #2  Going $200 \nProduct #3  Gone $225 \nProduct #4  Long Gone $250");
console.log(userStyleSelection);

//create variable to store the user's State sales tax rate for purchases
var stateRate = prompt("Please enter the sales tax for the State in which you reside");
console.log(stateRate);

//create array to hold the options for shipping prices
var shipOptions = [10.50, 35, 75];
var userShipSelection = prompt("Please select a shipping option number: \n0 for Regular Delivery \n1 for 2-Day Delivery \n2 for Overnight Delivery");
console.log(userShipSelection);

//calculate tax percentage
//var stateTax = stateRate / 100;
stateRate /= 100;
console.log(stateRate);

//calculate the package total with tax
//var cartTotal = bagStyle[Number(userStyleSelection)] * stateRate;
//console.log(cartTotal);

var cartTotal = userStyleSelection[Number(bagStyle)] * stateRate;
console.log(cartTotal);

//alert("You have selected the $" +bagStyle[Number(userStyleSelection)]+ " at a state sales tax rate of " +stateRate+ "% and the " +userShipSelection +" .");






