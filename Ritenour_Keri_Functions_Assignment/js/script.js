/**
 * Keri Ritenour
 * 6/23/15
 * Section 02
 * Functions Assignment
 */

//testing to see if connected
//alert("Testing to see if connected");

//Calculate the tip you would leave at a restaurant based on the total amount purchased and the service rating

//create variables
var checkTotal = prompt("Enter the total of your check rounded up to the next whole dollar before taxes:");
var percentTip = prompt("Enter the percentage amount you would like to tip:");
var serviceRating = prompt("On a scale of 1 to 5, how would you rate this restaurant? \n1 = Poor \n2 = Fair \n3 = Mediocre \n4 = Good \n5 = Great!");



var totalWithTip = tipTotal(checkTotal, percentTip, serviceRating);
