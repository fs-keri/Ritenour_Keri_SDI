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

//create a variable for shipping
var shipPrice = 12.75;

//prompt user for bag selection
var userBagSelection = prompt("Enter the product number corresponding to the Hand Bag you would like to purchase: \nProduct 0 Sweet Petite $15.50 \nProduct 1 Little Lucy $20.00 \nProduct 2 Regular Regina $25.00 \nProduct 3 Big Bertha $35.50 \nProduct 4 The Kitchen Sink $49.99");

//create conditional to validate user input if blank or not a number
if(userBagSelection === "" || isNaN(userBagSelection)){
    userBagSelection = prompt("Please do not leave blank. \nEnter the product number for the bag you would like to purchase: \nProduct 0 Sweet Petite $15.50 \nProduct 1 Little Lucy $20.00 \nProduct 2 Regular Regina $25.00 \nProduct 3 Big Bertha $35.50 \nProduct 4 The Kitchen Sink $49.99");
}if(userBagSelection === "" || isNaN(userBagSelection)){
    userBagSelection = prompt("Only product numbers are valid. \nPlease enter the product number corresponding to the bag you are purchasing: \nProduct 0 Sweet Petite $15.50 \nProduct 1 Little Lucy $20.00 \nProduct 2 Regular Regina $25.00 \nProduct 3 Big Bertha $35.50 \nProduct 4 The Kitchen Sink $49.99");
}
//store selection
console.log(userBagSelection);

//prompt user for quantity of bags they would like to purchase
var quantity = prompt("Enter the number of hand bags in this style would you like to purchase?");
console.log(quantity);

//create conditional to validate user input
if(quantity === "" || isNaN(quantity)){
    quantity = prompt("Only numbers are valid. Please only enter the quantity of the hand bag you would like to purchase:");
}
//store quantity
console.log(quantity);

//calculate the total by multiplying the hand bag price times the quantity desired
var totalCart = (bagPrice[Number(userBagSelection)] * quantity);
console.log(totalCart);

//create ternary for shipping discount
(totalCart >= 75) ? console.log("You qualify for free shipping!") : console.log("Your shipping cost is $" +shipPrice);

//variable to store shipping if not free
var totalShip;

//conditional to determine if cart qualifies for free or paid shipping
if (totalCart >= 75){
    console.log(totalCart);
}else if (totalCart < 75){
    totalShip = totalCart + shipPrice;
    console.log(totalShip);
}




