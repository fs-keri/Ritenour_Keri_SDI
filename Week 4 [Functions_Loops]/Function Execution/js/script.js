/**
 * Keri Ritenour
 * 5/26/15
 * Section 1
 * Functions - Function Execution
 */

function outptMsg(){
    console.log("Hello Wordl");
}

//function definition
function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

//just having the above function in our code is not enough
//we need to call or invoke the function


//function invocation or Call
calcArea();  //to call or invoke the function you write the name of the function
            //followed by parentheses

calcArea();
calcArea();
calcArea(); //this would call the function 4 times, making it reusable, repeatable