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
if (interestRate==="" || isNaN){
    interestRate=prompt("Please do not leave blank and enter the interest rate");
}else {
    var interestCompute=interestRate/100;
}
console.log(interestCompute);

//create a variable to prompt the user for the months they would like to finance the vehicle
var monthsPrompt=prompt("How many months would you like to finance the vehicle?");
//validate for both blank and less than 24 months
if(monthsFinanced < 24){
    monthsFinanced=prompt("We only give loans for longer than 24 months. Please enter an amount greater than 24 months");
}else{
    var monthsFinanced = monthsPrompt;
}
console.log(monthsFinanced);