/**
 * Keri Ritenour
 * 5/13/15
 * Section 1
 * Activity: Expression Worksheet - Discounts
 */

//alert("Testing to see if connected.");

//Calculate the discounted price for an item with and without sales tax
var itemPrice= 40.00;
var discount= .20;
var itemDescription= "perfume";
var taxPercentage= .065;


//multiply the item price by the discount percentage
//var discountPercentage= (discount / 100);

//Testing to see if percentage calculation works
//console.log(discountPercentage);

//total of item with 20 percent discount
var totalDiscount= itemPrice - (itemPrice * discount);
//console.log(totalDiscount);

//total calculated with tax
var totalwithTax = totalDiscount + (totalDiscount * taxPercentage);
//console.log(totalwithTax);

//total calculated without tax
var totalNoTax= totalDiscount;

console.log("Your " +itemDescription+ " was originally $" +itemPrice+ " but after a " +discount+ "% discount, " +
    "it is now $" +totalNoTax+ " without tax, and $" +totalwithTax+ " with tax.");