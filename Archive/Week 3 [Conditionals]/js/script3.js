/**
 * Keri Ritenour
 * 5/20/15
 * Section 1
 * Conditionals Screencasts - Logical Operators
 */

var budget =100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget || wonLottery){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!");
}

//since wonLottery is true it doesn't matter that the budget is less than price