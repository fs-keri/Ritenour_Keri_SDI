/**
 * Keri Ritenour
 * 5/27/15
 * Section 1
 * GoTo Training Week 4
 */

//alert("Testing to see if connected");

//create code that will give us a random number between two numbers
//create a function that will do it and return that value

//ask the user for a minimum number
var min =prompt("Let's get a random number between two numbers. \n and please type in a minimum number:");

//validate the prompt
if(min==="" || isNaN(min)){
    //this will run if conditional inside of () is true
    //re-prompt the user with the same variable name
    min=prompt("Please do not leave blank and only use numbers.");
}

/*
outside of while loop we have to set a variable
var x=6;

create the while loop
while(condition to test){
    other code
    change to the variable, this avoids an infinite loop
}
 */

//validate the prompt
while(min==="" || isNaN(min)){
    //this will run if conditional inside of () is true
    //re-prompt the user with the same variable name
    min=prompt("Please do not leave blank and only use numbers.");

    if(min===""){
        min=prompt("Please do not leave blank and only use numbers. \Please type in a minimum number");
    }else if(isNaN(min)){
        min=prompt("Please only use numbers. \Please type in a minimum number");
    }
}