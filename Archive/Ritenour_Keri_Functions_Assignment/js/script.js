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
console.log(weight);


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
console.log(feetHeight);

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
console.log(inchHeight);


//prompt the user for their age
var age = prompt("Please enter your age");

//validate the prompt
while(age==="" || isNaN(age)){
    //re-prompt the user with the same variable name
    if(age===""){
        age=prompt("Please do not leave blank. \nEnter your age in numbers.");
    }else if(isNaN(age)){
        age=prompt("Please only use numbers. \nEnter your age.");
    }else if (age<=15){
        age=prompt("Your BMI cannot be calculated due to your age");
    }
}
console.log(age);


//create a function to calculate the results
function calcBmi(bWeight, bfeet, binches, bmiTot){
    var bWeight = weight * .045;
    var binches = (((feetHeight*12)) + inchHeight * .025);
    var bfeet = binches * binches;
    var bmiTot = bWeight / binches;
    return totalBmi;
}

calcBmi(bWeight, bfeet, binches, bmiTot);


//Print final output to user
console.log("Your BMI is "+(calcBmi())+ ".");


/*Final Testing
Well it was working, but for some reason it is not working now.

Extremely frustrated as this has taken me longer than 6 hours.
 */

/*
 Functions Rubric


 Functions:(3/10)

 Only 1 functions is present in your code.


 Arguments & Parameters:(5/15)

 Only 1 function uses arguments and parameters. However they are used incorrectly. The parameters bWeight, bFeet, etc should be used in place of the main code variables wight, feetHeight, etc..


 Return Value:(3/10)

 Only 1 functions uses a return value but it is not being "caught". You need to have something like var results =calcBmi(bWeight, bfeet, binches, bmiTot);


 Prompt Validation:(5/5)

 At least 3 user prompts in code that are all correctly validated.


 Anonymous Function:(0/15)

 A anonymous function is not used in any example or does not function properly


 3 Parameters In A Function:(5/5)

 At least one of the examples contains a function that has 3 parameters.


 Main Code:(0/5)

 Main code variables are used inside of functions.


 Test Values:(0/5)

 No test values are present.


 GitHub Delivery:(10/10)

 Files are on github with correct number of commits


 Files:(10/10)

 File structure is correct and labeled with name/date


 Completeness:(2/5)

 Missing one or two required elements


 Investment:(5/5)

 Well thought out presentation


 Total:(48/100)

 Please see comments above for ways to improve your code.


 */

