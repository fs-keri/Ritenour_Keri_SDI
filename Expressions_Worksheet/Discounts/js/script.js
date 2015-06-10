/**
 * Keri Ritenour
 * 6/9/15
 * Section 02
 * Expressions Worksheet - Discounts
 */

//alert("Testing to see if connected");

/*
 Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax.
 (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)

 Givens:
    Original price
    Discount percentage (20% would be 20, for example)
    Description of item
    Sales tax percentage

 Result Variables:
    Price of the item with tax
    Price of the item without tax

 Result to Print:
    “Your X was originally $X, but after a X% discount, it is now $X without tax, and $X with tax.”
 */

//created variable for given items
var itemPrice = 275;
var percentAmount = 20;
var itemDescription = "laptop bag";
var salesTax = 6;

//calculate percentage discount
var percentOff = 20 / 100; //must divide by 100 to get the percentage

//calculate percentage sales tax
var salesTax = 6 / 100; //must divide by 100 to get the percentage

//calculate the itemPrice minus the discount
var itemAfterDiscount = itemPrice - (itemPrice * percentOff);

//calculate the item with the discount
var withTax = (itemAfterDiscount * salesTax) + itemAfterDiscount;

//print to console
console.log("Your " +itemDescription+ " was originally $" +itemPrice+ ", but after a " +percentAmount+ "% discount, it is now $" +itemAfterDiscount+ " without tax, and $" +withTax+ " with tax");

