/**
 * Keri Ritenour
 * 5/28/15
 * Section 1
 * Functions Assignment
 */

//alert("Testing to see if connected");

/* Code that creates a calculator that prompts the user to enter 3 pieces of information and validates that the inputs,
   uses 2 functions (1 normal, 1 anonymous);
   uses arguments and parameters, one function must use 3 parameters;
   a value must be returned for each function and saved in a variable in the main code;
   main code variable must not be used inside a function - must pass into an argument;
   all user prompts must be validated using a while loop
 */

//Create a calculator that returns the body mass index (BMI)

//Prompt the user to enter their weight
var weight = prompt("Please enter your weight in pounds:");

//validate the prompt
while(weight==="" || isNaN(weight)){
    //re-prompt the user with the same variable name
    if(weight===""){
        weight=prompt("Please do not leave blank. \nEnter your weight in pounds.");
    }else if(isNaN(weight)){
        min=prompt("Please only use numbers. \nEnter your weight.");
    }
}


//prompt the user to enter their height in feet
var feetHeight = prompt("Now, enter your tall you are in feet:");

//validate the prompt
while(feetHeight==="" || isNaN(feetHeight)){
    //re-prompt the user with the same variable name
    if(feetHeight===""){
        feetHeight=prompt("Please do not leave blank. \nEnter how tall you are in feet.");
    }else if(isNaN(feetHeight)){
        feetHeight=prompt("Please only use numbers. \nEnter your height in feet.");
    }
}

//prompt the user to enter their inches in height
var inchHeight = prompt("Are there any inches associated with your height?");

//validate the prompt
while(inchHeight==="" || isNaN(inchHeight)){
    //re-prompt the user with the same variable name
    if(inchHeight===""){
        inchHeight=prompt("Please do not leave blank. \nEnter any inches associated with your height.");
    }else if(isNaN(inchHeight)){
        inchHeight=prompt("Please only use numbers. \nEnter the inches associated with your height. \nIf 0, then enter 0.");
    }
}

//create a variable to store the results
var bmiResults = (weight, feetHeight, inchHeight);

//create a function to calculate the results
function calcBMI(bWeight, inches, inchTotal, total){
    var bWeight = weight * .045;
    //var feet = feetHeight * 12;
    var inches = (((feetHeight*12)) + inchHeight * .025);
    var inchTotal = inches * inches;
    var total = bWeight / inchTotal;
    return total;
}

calcBMI();
console.log("Your BMI is " +calcBMI(bWeight, inches, inchTotal, total)+ ".");