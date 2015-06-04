
/**
 * Keri Ritenour
 * 5/20/15
 * Section 1
 * Conditionals Screencasts - Logical Operators
 */

var budget =300;
var iPhonePrice = 199.99;
var paycheck =200;

//if the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!");
}
if(paycheck > 300){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!");
}

//How do we combine the above example to meet both conditions
if(iPhonePrice < budget && paycheck > 300){ //must have 2 relational expressions < &&
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!");
}