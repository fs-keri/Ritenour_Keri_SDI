/**
 * Keri Ritenour
 * 6/9/15
 * Section 02
 * Week 2 - Casting
 */

//alert("Testing to see if connected");

var stringVar = "6";
var result = 7 + Number(stringVar);//this says treat this like a number
console.log(result);

var areaCode = 407;
var firstPart = 203;
var secondPart = 4529;
var phoneNo = areaCode + firstPart + secondPart;
console.log (phoneNo); //this will not string these together, they need casted

var phoneNo = String(areaCode) + String(firstPart) + String(secondPart);
console.log (phoneNo);

//to get it to look like a phone number (407) 203-4529
var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" +String(secondPart);
console.log (phoneNo);