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
//validate user input
if(checkTotal === "" || isNaN(checkTotal)){
    checkTotal = prompt("Please do not leave blank and only provide numbers. \nEnter the total amount of your purchase rounded to the nearest whole dollar before taxes:");
}if(checkTotal === "" || isNaN(checkTotal)){
    checkTotal = prompt("Please only use numbers. \nProvide the total amount of your purchase rounded to the nearest whole dollar before taxes:");
}

var percentTip = prompt("Enter the percentage amount you would like to tip:");
//validate user input
if(percentTip === "" || isNaN(percentTip)){
    percentTip = prompt("Please do not leave blank and only provide numbers. \nEnter the percentage amount you would like to tip:");
}if(percentTip === "" || isNaN(percentTip)) {
    percentTip = prompt("Please only use numbers. \nProvide the percentage amount you would like to tip:");
}

var serviceRating = prompt("On a scale of 1 to 5, how would you rate this restaurant? \n1 = Poor \n2 = Fair \n3 = Mediocre \n4 = Good \n5 = Great!");
//validate user input
if(serviceRating === "" || isNaN(serviceRating)){
    serviceRating = prompt("Please do not leave blank and only provide numbers. \nPlease rate this restaurant using the following scale: \n1 = Poor \n2 = Fair \n3 = Mediocre \n4 = Good \n5 = Great!");
}if(serviceRating === "" || isNaN(serviceRating)) {
    serviceRating = prompt("Please only use numbers. \nProvide the rating you would give this restaurant? \n1 = Poor \n2 = Fair \n3 = Mediocre \n4 = Good \n5 = Great!");
}

//function call
var totalWithTip = tipTotal(checkTotal, percentTip, serviceRating);

//function definition for calculation
function tipTotal(c, p, s){
    var calc = ((Number(p / 100) * Number(c)) + Number(c) + Number(s));
    return calc;
}

console.log("The total amount of your check was $" +checkTotal+ ". \nYou would like to leave a " +percentTip+ "% tip. \nYou gave the restaurant a " +serviceRating+ " rating. \nThe total amount with the tip and service rating is $" +totalWithTip+ ".");

//alert to user
alert("The total amount of your check was $" +checkTotal+ ". \nYou would like to leave a " +percentTip+ "% tip. \nYou gave the restaurant a " +serviceRating+ " rating. \nThe total amount with the tip and service rating is $" +totalWithTip+ ".");
