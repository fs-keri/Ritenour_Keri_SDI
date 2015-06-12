/**
 * Keri Ritenour
 * 6/10/15
 * Section 02
 * Expressions Assignment
 */

//alert("Testing to see if connected");

//Online Ordering System alert to user
alert("Welcome to LAPBAGS Online Ordering! \nTo place an order select OK.");

//create array to hold the price of each bag style and prompt user for bag style selection
var bagStyle = [150, 175, 200, 225, 250];
var userStyleSelection = prompt("Enter the product number corresponding to the bag style you would like to purchase: \nProduct 0  Go Bag $150 \nProduct 1  On-the-Go $175 \nProduct 2  Going $200 \nProduct 3  Gone $225 \nProduct 4  Long Gone $250");
console.log(userStyleSelection);

//create variable to store the user's State sales tax rate for purchases
var stateRate = prompt("Please enter the sales tax for the State in which you reside");
console.log(stateRate);

//create array to hold the options for shipping prices
var shipOptions = [10.50, 35, 75];
var userShipSelection = prompt("Please select a shipping option number: \n0 Regular Delivery $10.50 \n1 Two-Day Delivery $35.00 \n2 Overnight Delivery $75.00");
console.log(userShipSelection);

//calculate tax in percentage
stateRate /= 100;

//calculate the total by adding the bag style price and shipping price
var cartTotal = (bagStyle[Number(userStyleSelection)] + shipOptions[Number(userShipSelection)]);
console.log(cartTotal);

//calculate the total tax by multiplying the total of the cart by the state sales tax rate
var totalTax = cartTotal * stateRate;
console.log(totalTax);

//calculate the total amount due by adding the cart total and the total tax
var amountDue = cartTotal + totalTax;
console.log(amountDue);

//alert the user of the bag cost, sales tax, shipping and total amount due.
alert("The cost of your bag is $" +bagStyle[Number(userStyleSelection)] +". \nThe State sales tax is " +(stateRate *100)+ "% and the shipping cost is $" +shipOptions[Number(userShipSelection)] +". \nThe total amount due is $" +amountDue+ ". \n\nThank you for shopping with LAPBAGS!");


/*Final Testing
 I typed in 2 for bagStyle, 6 for stateRate and 2 for shipOptions.
 It gave me a total of $291.50.

 I typed in 1 for bagStyle, 5 for stateRate and 1 for shipOptions.
 It gave me a total of $220.50.

 I typed in 4 for bagStyle, 7.5 for stateRate and 0 for shipOptions.
 It gave me a total of $280.0375.
 */