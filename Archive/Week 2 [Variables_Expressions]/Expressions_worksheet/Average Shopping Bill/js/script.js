/**
 * Keri Ritenour
 * 5/13/15
 * Section 1
 * Activity: Expression Worksheet - Average Shopping Bill
 */

//alert("Testing to see if connected.");

//Calculate the average spending amount for groceries over the past 5 weeks
var groceryTotals =[249.25, 141.56, 121.03, 142.27, 92.89];

//Calculate the total amount spent on groceries
var total= groceryTotals[0] + groceryTotals[1] + groceryTotals[2]+ groceryTotals[3] + groceryTotals[4];

//Calculate the average weekly total spending on groceries
var average = total /5;
console.log("You have spent a total of $" +total+ " on groceries over 5 weeks. That is an average of $" +average+ " per week");
