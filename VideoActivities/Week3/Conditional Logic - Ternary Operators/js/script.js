/**
 * Keri Ritenour
 * 6/16/15
 * Section 02
 * Week 3 - Conditional Logic - Ternary Operators
 */

//alert("Testing to see if connected");

//(condition) ? do if true : do if false;

var gpa = 48;

//conditional
//if the gpa is over the min 2.0 score the student can graduate
if(gpa >2.0){
    console.log("You can graduate!");
}else{
    console.log("GPA is too low!");
}

//ternary operator
(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");



//conditional
var age = 6;
var book;

//ternary
//if child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine
if(age < 10){
    book = "Green Eggs and Ham";
}else{
    book = "The Time Machine";
}
console.log(book);

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);
