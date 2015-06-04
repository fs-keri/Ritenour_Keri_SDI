/**
 * Created by kerilritenour on 5/19/15.
 */

/**
 * Keri Ritenour
 * 5/19/15
 * Section 1
 * Expressions Assignment - Modifications
 */

//alert("Testing to see if connected.");

//Calculator for monthly payments of one year website, hosting, and support packages

//create array for the website package
var webPack = [200, 400, 600, 800];
var webPrompt = prompt("Website packages are as follows: \nPackage #0 is $200 \nPackage #1 is $400 \nPackage #2 is $600 \nPackage #3 is $800 \nWhich website package number would you like to purchase?");
console.log(webPrompt);

//create array for the hosting package
var hostPack = [100, 125, 175, 200];
var hostPrompt = prompt("Website hosting packages are as follows: \nPackage #0 is $100 \nPackage #1 is $125 \nPackage #2 is $175 \nPackage #3 is $200 \nWhich hosting package number would you like to purchase?");
console.log(hostPrompt);

//create the support package
var supportPack = [100, 200, 300];
var supportPrompt = prompt("Website support packages are as follows: \nPackage #0 is $100 \nPackage #1 is $200 \nPackage #2 is $300 \nWhich support package would you like to purchase?");
console.log(supportPrompt);

//calculate the package total based on user prompted arrays
var packTotal = (webPack[Number(webPrompt)] + hostPack[Number(hostPrompt)] + supportPack[Number(supportPrompt)]);
console.log(packTotal);

//calculate the monthly payments based on the package total
var monthlyPay = packTotal / 12;
console.log("The website package you selected is $" +webPack[Number(webPrompt)]+ ", the hosting package is $" +hostPack[Number(hostPrompt)]+ " and the support " + "package is $" +supportPack[Number(supportPrompt)]+ ". Your total package price is $" +packTotal+ ". Your monthly payments for one year are $" +monthlyPay+ ".");


/*Final Testing
 I typed in 2 for webPack, 0 for hostPack and 2 for supportPack.
 It gave me a total of $1000 and a monthly payment of $83.33333333333333.

 I typed in 0 for webPack, 3 for hostPack and 2 for supportPack.
 It gave me a total of $700 and a monthly payment of $58.333333333333336.

 I typed in 3 for webPack, 3 for hostPack and 2 for supportPack.
 It gave me a total of $1300 and a monthly payment of $108.33333333333333.
 */