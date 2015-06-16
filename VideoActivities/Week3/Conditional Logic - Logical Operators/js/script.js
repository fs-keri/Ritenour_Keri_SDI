/**
 * Keri Ritenour
 * 6/16/15
 * Section 02
 * Week 3 - Conditional Logic - Logical Operators
 */

//alert("Testing to see if connected");

//Equality == compares two "is this the same"  a==b

//Assignment = stores values  a=b "changes the value and stores it"

//Strict Equality === "the same value and the same type"
    // 6 == "6" TRUE
    // 6 === "6"  FALSE (one is a number and one is a string)

    //Use Strict Equality over Equality === is better and faster than ==

//Inequality != "is not the same as"

//Logical operators are only put between boolean variables or between comparisons
  //something that is already being used with relational expressions

// AND Operator
//if the price of the phone is less our budget AND if your paycheck is over 300
var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;

if(iPhonePrice < budget && paycheck > 300){ // && requires both are true
   console.log("We can buy the phone!")
}else{
    console.log("No phone for you!")
}

// OR Operator
var budget = 300;
var iPhonePrice = 199.99;
var wonLottery = true;

if(iPhonePrice < budget || wonLottery === true){ // || only one needs to be true
    console.log("We can buy the phone!")
}else{
    console.log("No phone for you!")
}

// ! NOT Operator - (flips the meaning of the object also called negation)

//will not work a === b === c
//should be written a === b && b === c

// Relational operators go in between PAIRS of objects
// Logical operators go in between Relational Expressions or Boolean values
// Always work in Pairs (if working with 3 object break them down into pairs