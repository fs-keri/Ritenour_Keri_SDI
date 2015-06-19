/**
 * Keri Ritenour
 * 6/17/15
 * Section 02
 * Week 3 - Conditionals Assignment
 */

//alert("Testing to see if connected");

//alert user welcoming them to the online ordering system
alert("Welcome to 550 Online Ordering! \nThe Home of 5 Hand Bags under $50 \nTo Place an order, select OK.");

//create variable to store the price of the bag
var bagPrice = [15.50, 20, 25, 35.50, 49.99];

//prompt user for bag selection
var userBagSelection = prompt("Enter the product number corresponding to the Hand Bag you would like to purchase: \nProduct 0 Sweet Petite $15.50 \nProduct 1 Little Lucy $20.00 \nProduct 2 Regular Regina $25.00 \nProduct 3 Big Bertha $35.50 \nProduct 4 The Kitchen Sink $49.99");

//create conditional to validate user input if blank or not a number
if(userBagSelection === "" || isNaN(userBagSelection)){
    userBagSelection = prompt("Please do not leave blank. \nEnter the product number for the bag you would like to purchase: \nProduct 0 Sweet Petite $15.50 \nProduct 1 Little Lucy $20.00 \nProduct 2 Regular Regina $25.00 \nProduct 3 Big Bertha $35.50 \nProduct 4 The Kitchen Sink $49.99");
//validate input again if user leaves blank or does not enter a number
}else if(isNaN(userBagSelection)){
    userBagSelection = prompt("Only product numbers are valid. \nPlease enter the product number corresponding to the bag you are purchasing: \nProduct 0 Sweet Petite $15.50 \nProduct 1 Little Lucy $20.00 \nProduct 2 Regular Regina $25.00 \nProduct 3 Big Bertha $35.50 \nProduct 4 The Kitchen Sink $49.99");
}else{
    userBagSelection;
}
//store selection
console.log(userBagSelection);



