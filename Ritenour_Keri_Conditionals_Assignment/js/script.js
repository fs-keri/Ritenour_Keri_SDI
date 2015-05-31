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

/*
 Conditionals Rubric


 Calculation:(5/5)

 Some type of math is used an a calculation and includes at least 2 factors as variables, not hard-coded values.


 Conditional:(7/15)

 Only 1 Conditional Statement is present in code that is not a part of the validation.


 User Prompts:(10/10)

 3 user prompts are correctly used in the code.


 Comments:(10/10)

 Each line has meaningful comments


 Else If:(0/5)

 No Else If Statement is present.


 Logical Operators:(5/5)

 At least 1 Logical Operator is present in code and works correctly.


 Ternary Statement:(2/5)

 Ternary Statement is present, but is not used properly.


 Validation:(5/10)

 All 3 prompted values are checked to make sure they look okay, but the validation is not correct. You have isNaN, but it should be isNaN(variable name) this is one of the reasons that you are getting errors.


 Test Values:(0/5)

 Test values are present but they are not correct. Also, I typed in the same values and do not get your answers.


 GitHub Delivery:(10/10)

 Files are on github with correct number of commits


 Files:(10/10)

 File structure is correct and labeled with name/date


 Completeness:(2/5)

 Missing one or two required elements


 Investment:(5/5)

 Well thought out presentation


 Total:(671/100)

 Please see comments above for ways to improve your code.

 Below are some of your errors.

 This else statement is redeclaring the variable vehPrice, you do not need this.

 else {
 var vehPrice;
 }
 This is how validation should look: Notice the || instead of && and also the proper form for isNaN()

 if (interestRate==="" || isNaN(interestRate)){
 interestRate=prompt("Please do not leave blank and enter the interest rate");
 }
 In this conditional, you are testing a variable monthsFinanced before ever even creating it. I think you meant to use the monthsPrompt variable instead.

 if(monthsFinanced < 24){
 monthsFinanced=prompt("We only give loans for longer than 24 months. Please enter an amount greater than 24 months");
 }else{
 var monthsFinanced = monthsPrompt;
 }
 In your ternary you are prompting for a value but not storing it anywhere.  You should either use an alert or a console.log. Prompts are only for getting values from the user.

 ((vehPrice * interestRate) > 10000) ? prompt("Select enter to proceed.") : prompt("You are ineligible loan.");

 */