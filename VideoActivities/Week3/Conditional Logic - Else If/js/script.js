/**
 * Keri Ritenour
 * 6/15/15
 * Section 02
 * Week 3 - Conditional Logic - Else if
 */

//alert("Testing to see if connected");

//Else if allows the machine to choose between 3 blocks of code

var kidHeight = 44;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with a parent.

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
    //code performed if condition is true
    // you can ride
    console.log("You can ride the coaster!");
} else if(kidHeight > wParentHeight){//else always h
    //code performed if condition is false
    // you can ride with a parent present
    console.log("You can ride, but only with a parent present.");
}else {
    //sorry you have growning to do
    console.log("Sorry kid, you've got some growing to do first!");
}


//Else if always require a condition
//Else never has a condition attached ot it