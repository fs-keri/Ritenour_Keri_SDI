/**
 * Keri Ritenour
 * 6/23/15
 * Section 02
 * Functions Assignment
 */

//testing to see if connected
//alert("Testing to see if connected");

//Calculate the tip you would leave at a restaurant based on the total amount purchased and the service rating

//create variable for total check amount
var checkTotal = prompt("Enter the total of your check rounded up to the next whole dollar before taxes:");
//validate user input
while(checkTotal === "" || isNaN(checkTotal)){
    checkTotal = prompt("Please do not leave blank and only provide numbers. \nEnter the total amount of your purchase rounded to the nearest whole dollar before taxes:");
}

//create variable to store the percentage
var percentTip = prompt("Enter the percentage amount you would like to tip:");
//validate user input
while(percentTip === "" || isNaN(percentTip)){
    percentTip = prompt("Please do not leave blank and only provide numbers. \nEnter the percentage amount you would like to tip:");
}

//create variable for service rating of restaurant
var serviceRating = prompt("On a scale of 1 to 5, how would you rate this restaurant? \n1 = Poor \n2 = Fair \n3 = Mediocre \n4 = Good \n5 = Great!");
//validate user input
while(serviceRating === "" || isNaN(serviceRating)){
    serviceRating = prompt("Please do not leave blank and only provide numbers. \nPlease rate this restaurant using the following scale: \n1 = Poor \n2 = Fair \n3 = Mediocre \n4 = Good \n5 = Great!");
}

//function call
var totalWithTip = tipTotal(checkTotal, percentTip, serviceRating);

//function definition to calculate the percentage, then multiply by total check amount, add the check amount to the service rating
function tipTotal(c, p, s){
    var calc = ((Number(p / 100) * Number(c)) + Number(c) + Number(s));
    return calc;
}

//function definition to calculate separate billing
var billCalc = function(){
    var dutchCalc = totalWithTip / sepBill;
    return dutchCalc;
    console.log(dutchCalc);
};

//print to console
console.log("The total amount of your check was $" +checkTotal+ ". \nYou would like to leave a " +percentTip+ "% tip. \nYou gave the restaurant a " +serviceRating+ " rating. \nThe total amount with the tip and service rating is $" +totalWithTip.toFixed(2)+ ".");

//alert to user
alert("The total amount of your check was $" +checkTotal+ ". \nYou would like to leave a " +percentTip+ "% tip. \nYou gave the restaurant a " +serviceRating+ " rating. \nThe total amount with the tip and service rating is $" +totalWithTip.toFixed(2)+ ". \nSelect OK to continue.");

//prompt user for the number of people in party if the bill will be divided amongst them
var sepBill = prompt("To calculate separate billing, \nenter the total number of people in your party. \nEnter 1 if you are paying for the entire check.");
//validate user input
while(sepBill === "" || isNaN(sepBill)){
    sepBill = prompt("Please do not leave blank and only provide numbers. \nProvide the total number in your party: \nEnter 1 if you are paying for the entire check.");
}

//function call for separate billing calculation
var billTotal = billCalc();
console.log(billTotal);

//alert user of total amount due from each person.
alert("The total amount per person is $" +billTotal.toFixed(2));


/*Final Testing
 I typed in 100 for check total, 20 for Tip and 5 for service rating.
 It told me the total amount due was $125
 I typed in 2 for total number of people in party
 It gave me $62.50

 I typed in 72 for check total, 15 for Tip and 3 for service rating.
 It told me the total amount due was $85.80
 I typed in 4 for total number of people in party
 It gave me $21.45

 I typed in 145 for check total, 25 for Tip and 4 for service rating.
 It told me the total amount due was $185.25
 I typed in 7 for total number of people in party
 It gave me $26.46

 I typed in 57.25 for check total, 30 for Tip and 2 for service rating.
 It told me the total amount due was $76.42
 I typed in 4 for total number of people in party
 It gave me $19.11
 */




