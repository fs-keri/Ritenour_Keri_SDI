/**
 * Keri Ritenour
 * 5/21/15
 * Section 1
 * Conditionals Assignment
 */

//alert("Testing to see if connected");

//Create a calculator to determine the total cost of a vehicle and the monthly payments

//create a variable to prompt the user for the cost of the vehicle
var vehPrice=prompt("What is the cost of the vehicle");
//validate for both blank and a number
if(vehPrice==="" && isNaN){
    vehPrice=prompt("You must enter the cost of the vehicle.");
}else {
    var vehPrice;
}
console.log(vehPrice);

//create a variable to prompt the user for the interest rate they would like
var interestRate=prompt("Select either a 6, 8 or 9 percent interest rate?");
//validate for both blank and a number
if (interestRate==="" && isNaN){
    interestRate=prompt("Please do not leave blank and enter the interest rate");
}
console.log(interestRate);

//create a variable to prompt the user for the months they would like to finance the vehicle
var monthsPrompt=prompt("How many months would you like to finance the vehicle?");
//validate for both blank and less than 24 months
if(monthsFinanced < 24){
    monthsFinanced=prompt("We only give loans for longer than 24 months. Please enter an amount greater than 24 months");
}else{
    var monthsFinanced = monthsPrompt;
}
console.log(monthsFinanced);

//ternary to tell the user that there loan is eligible or ineligible
((vehPrice * interestRate) > 10000) ? prompt("Select enter to proceed.") : prompt("You are ineligible loan.");

var total;
total = vehPrice * (interestRate / 100);
var payments;
payments= total / monthsFinanced;

//Print final output to user
console.log("The price of the vehicle is $"+(vehPrice)+ " and the interest rate is " +(interestRate)+ "%. " +
    "The total cost of the vehicle is $" +(total)+ " and your monthly payments are " +(payments)+ ".");


/*Final Testing
 I typed in 10000 for vehPrice, 6 for interestRate and 60 for monthsFinanced.
 It gave me a total of $600 and a monthly payment of $10.

 I typed in 300 for vehPrice, 6 for interestRate and 10 for monthsFinanced.
 It notified me that I was ineligible for a loan.

 I typed in 30000 for vehPrice, 8 for interestRate and 36 for monthsFinanced.
 It gave me a total of $2700 and a monthly payment of $75.
 */