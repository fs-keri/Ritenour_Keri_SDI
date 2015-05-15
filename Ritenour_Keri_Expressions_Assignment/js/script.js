/**
 * Keri Ritenour
 * 5/14/15
 * Section 1
 * Expressions Assignment
 */

//alert("Testing to see if connected.");

//Calculator for monthly payments of one year website, hosting, and support packages

//create array for the website package
var webPack = [200, 400, 600, 800];
var webPrompt = prompt("Which website package would you like to purchase?");
console.log(webPrompt);

//create array for the hosting package
var hostPack = [100, 125, 175, 200];
var hostPrompt = prompt("Which hosting package would you like to purchase?");
console.log(hostPrompt);

//create the support package
var supportPack = [100, 200, 300];
var supportPrompt = prompt("Which support package would you like to purchase?");
console.log(supportPrompt);

//calculate the package total based on user prompted arrays
var packTotal = (webPack[3] + hostPack[3] + supportPack[2]);
console.log(packTotal);

//calculate the monthly payments based on the package total
var monthlyPay = packTotal / 12;
console.log("The website package you selected is $" +webPack[3]+ ", the hosting package is $" +hostPack[3]+ " and the support " +
    "package is $" +supportPack[2]+ ". Your total package price is $" +packTotal+ ". Your monthly payments for one year are $" +monthlyPay+ ".");


/*Final Testing
    I typed in 2 for webPack, 0 for hostPack and 2 for supportPack.
    It gave me a total of $1000 and a monthly payment of $83.33333333333333.

    I typed in 0 for webPack, 3 for hostPack and 2 for supportPack.
    It gave me a total of $700 and a monthly payment of $58.333333333333336.

    I typed in 3 for webPack, 3 for hostPack and 2 for supportPack.
    It gave me a total of $1300 and a monthly payment of $108.33333333333333.
 */