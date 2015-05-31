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

/*
 Expressions Rubric


 Calculation:(6/20)

 Numbers are used, but calculation is not present or meaningful, or hard-coded values are used.


 Prompts:(5/10)

 You are asking for a package but never giving the user the values. How are they suppose to know the choices or if they type in 0,1,2,3 or 200, 400, 600, 800 etc..

 Prompted for at least 3 values, but values are not used to calculate the final answer.


 Data Types:(10/10)

 Array, String, & Numbers are all used


 Output:(15/15)

 Console.log includes calculated values, descriptive text, & string concatenation


 Assignment Operator:(0/5)

 No assignment operators other than the equal sign is used in code.


 Test Values:(2/2)

 Test values are present in a comment at the end of code but are not correct. If the user types in those values in the prompts the final answer does not change.


 GitHub Delivery:(10/10)

 Files are on github with correct number of commits


 Files:(10/10)

 File structure is correct and labeled with name/date


 Completeness:(2/5)

 Missing one or two required elements


 Investment:(5/5)

 Well thought out presentation


 Total:(65/100)

 Please see comments above for ways to improve your code.

 The main problem is that you are asking the user for input and then ignoring what they type in and using a hardcoded value instead.

 var packTotal = (webPack[3] + hostPack[3] + supportPack[2]);

 This should have been

 var packTotal = (webPack[Number(webPrompt)] + hostPack[Number(hostPack)] + supportPack[Number(supportPack)]);

 11 days ago
 Ritenour_Keri_Express_Assgn_Modified.zip
 Thank you for the feedback. I was wondering about the input and getting around the hardcoding. I was wondering if you could take a look and see if this would be what you were looking for? I know it will not change my grade. I really want to understand what I am doing and would like your feedback on this. I also committed it to my git repo with the same file type name. Thank you! Keri

 11 days ago
 Yes!  That is much better!  Now when the user types in their responses it effects the numbers!  Good job!
 */