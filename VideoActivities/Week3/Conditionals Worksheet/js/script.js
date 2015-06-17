/**
 * Keri Ritenour
 * 6/16/15
 * Section 02
 * Week 3 - Conditionals Worksheet
 */

//alert("Testing to see if connected");

//EXAMPLE
//Is it hot enough to go to the beach?
var temp = 76;

//if temperature is less than 75
if(temp < 75){
    //if its less than 75
    console.log("We will go to the beach!");
}else{
    //if it's greater or equal to 75
    console.log("We will go to the movies.");
}

//EXAMPLE
//Did the entrant qualify for the heavyweight division?
var weight = 249;

//if entrants weight is greater than 250
if(weight > 250){
    //entrant qualifies
    console.log("The competitor qualifies for the heavyweight division.");
}else{
    //entrant does not qualify
    console.log("The competitor needs to gain some weight!");
}


//GROUP 1 Expressions with Conditionals

//convert temperature to celsius
//create variables
var temperature = 78;
var degrees = (prompt("Select F to convert to Fahrenheit or C to convert to Celsius:"));
var degCent;

var degFahren = Number(prompt("Enter the degrees Fahrenheit"));

if(degrees == F){
    degCent = 5/9 * (degFahren -32);
    console.log("It is " +degCent+ "\xB0 Fahrenheit");
}
if(degrees == C){

    console.log("It is " +degCent+ "\xB0 Celsius");
}












