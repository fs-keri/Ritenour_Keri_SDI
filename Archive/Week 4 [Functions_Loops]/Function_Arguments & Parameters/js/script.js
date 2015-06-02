/**
 * Keri Ritenour
 * 5/26/15
 * Section 1
 * Functions - Arguments & Parameters
 */

/**calcArea(30, 20); //these are the arguments that are getting stored in the parameters

function calcArea(w, h){ //these are the parameters or storage bins w=30 h=20
    var area = w * h;
    console.log(area);
}
*/

function dogYears(age){ //parentheses in the function definition holds parameters
    //var age=4;
    var dogYears = age *7;
    console.log("Sparky is " +dogYears+ " years old.")
}

dogYears(4); //the parentheses in the function call holds arguments
dogYears(5); //putting this number in here is referred to as passing. Here wer are passing the value 5 to age
dogYears(6); //here we are passing the value 6 to age

// can also do it by passing in a variable
var age1 = 4;
dogYears(age1);