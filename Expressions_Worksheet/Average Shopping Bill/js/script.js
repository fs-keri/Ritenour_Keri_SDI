/**
 * Keri Ritenour
 * 6/9/15
 * Section 02
 * Expressions Worksheet - Average Shopping Bill
 */

//alert("Testing to see if connected");

/*
 You are budgeting your money for the year and must calculate your average weekly grocery shopping
 spending over the past five weeks. Store the past five grocery totals as a list in an array.
 Create an expression that will use the items in the array to calculate the average amount spent on groceries.

 Please note: there should only be one given for this problem set, the array holding the five weekly totals.
 You should be able to access the array using the array access notation discussed earlier in the course.

 Givens
    An array with five weekly grocery totals.

 Result Variable:
    Total amount spent on groceries.
    Average weekly grocery spending.

 Result to Print:
    “You have spent a total of $X on groceries over 5 weeks. That is an average of $X per week”
 */

//create variable for weekly totals
var weeklyTotals = [124.33, 275.21, 164.78, 224.39, 144.58];

//calculate the total of the array by adding them together
var totalAmount = weeklyTotals[0] + weeklyTotals[1] + weeklyTotals[2] + weeklyTotals[3] + weeklyTotals[4];

//calculate the average amount spent by dividing the totalAmount by the number of totals, which is 5
var averageSpent = totalAmount / 5;

//print to console
console.log("You have spent a total of $" +totalAmount+ " on groceries over 5 weeks. That is an average of $" +averageSpent+ " per week.");

