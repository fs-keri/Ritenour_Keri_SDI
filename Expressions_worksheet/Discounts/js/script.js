/**
 * Keri Ritenour
 * 5/13/15
 * Section 1
 * Activity: Expression Worksheet - Discounts
 */

//alert("Testing to see if connected.");

//Calculate the discounted price for an item with and without sales tax
var itemPrice= 40.00;
var discount= 20;
var itemDescription= "perfume";
var taxPercentage= .065;


//multiply the item price by the discount percentage
var discountedPrice = (itemPrice - (100 * discount));
console.log(discountedPrice);
