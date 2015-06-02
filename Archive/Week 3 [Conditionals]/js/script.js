/**
 * Keri Ritenour
 * 5/19/15
 * Section 1
 * Conditionals Screencasts
 */


//Conditional Logic

var kidHeight = 52;
var minHeight =48;
var wParentHeight =45

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
//if(kidHeight > 48){
if(kidHeight > minHeight){
    //you can ride
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //you can ride but only with a parent present
    console.log("You can ride, but only with a parent present.")
}
    //
if(kidHeight <= minHeight){
    console.log("Sorry kid, you've got some growing to do");
}

//say we had a child with shoes that were 2 inches above then we
//could write a condition like
//if(kidHeight +2 >minHeight){
    //code performed if condition is true
  //  console.log("You can ride the coaster!");
//}

//easier way to do this with an else

//Three options:
// 1 - plain if statements are for the machine to choose whether to do a block of code
// or to skip it.

// 2- if and else is for the machine to choose between 2 blocks of code

// 3 - else/if chain allows the machine to choose between 3 or more blocks of code