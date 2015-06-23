/**
 * Keri Ritenour
 * 6/22/15
 * Section 02
 * Week 4 - Functions - Arguments & Parameters
 */

//alert("Testing to see if connected");

//funcName (argument1, argument2);

//function funcName(parameter1, parameter2){
    //code that function runs
//}

calcArea(30, 20);

function calcArea(w, h){
    var area = w * h;
    console.log(area);
}

function dogYears(age){
    var dogYears = age * 7
    console.log("Sparky is " +dogYears+ " years old.")
}

dogYears(4); //this is called passing
dogYears(5);
dogYears(Number(prompt("How old is your dog in human years?")));