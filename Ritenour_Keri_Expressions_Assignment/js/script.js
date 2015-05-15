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

//alert the user of the package they have selected
//alert("You have selected website package number " +webPrompt+ " .");

//create array for the hosting package
var hostPack = [100, 125, 175, 200];
var hostPrompt = prompt("Which hosting package would you like to purchase?");
console.log(hostPrompt);

//alert the user of the hosting package they have selected
//alert("You have selected hosting package number " +hostPrompt+ " .");

//create the support package
var supportPack = [100, 200, 300];
var supportPrompt = prompt("Which support package would you like to purchase?");
console.log(supportPrompt);

//alert the user of the support package they have selected
//alert("You have selected support package number " +supportPrompt+ " .");

//calculate the package total based on user prompted arrays
var packTotal = (webPack[2] + hostPack[0] + supportPack[2]);
console.log(packTotal);

//calculate the monthly payments based on the package total
var monthlyPay = packTotal / 12;
console.log("The website package you selected is $" +webPack[2]+ " , the hosting package is $" +hostPack[0]+ " and the support " +
    "package is $" +supportPack[2]+ ". Your total package price is $" +packTotal+ ". Your monthly payments for one year are $" +monthlyPay+ ".");