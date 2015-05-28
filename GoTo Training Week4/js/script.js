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

    if(min===""){
        min=prompt("Please do not leave blank and only use numbers. \Please type in a min number");
    }else if(isNaN(min)){
        min=prompt("Please only use numbers. \n Please type in a min number");
    }
}

//prompt the user for a max number
var max =prompt("Please type in a max number:");

//validate the max number
while(max==="" || isNaN(max) || (Number(max)<Number(min))){
    //reprompt the user
    if(max===""){
        max=prompt("Please do not leave blank. \n Please type in a max number");
    }else if(max<min){
        max =prompt("The max value must be higher than your min value of " +min+ ". \nPlease type in a max value")
    }
    else {
        max=prompt("Please only use numbers. \n Please type in a max number")
    }
}

//function call - which is the name of the function();
//think of it as the go button
//arguments go inside of function call

//we need a variable to catch the returned value
var results=randomizr(min, max);

//create a function to calculate the random number
/*
function functionName(parameters){
    code to run everytime the function is called
}
 */

//Make function flexible by using arguments and parameters
//send information into a function and catches it there
//functions are like Vegas - whatever is inside the function stays inside the function

function randomizr(minNum, maxNum){
    //find a random number
    //Math.random() - gives a random number between 0 and 1
    //Math.round(variable) -basic rounding. .5+ goes up otherwise it goes down
    var randomNumber = Math.random(Math.random() * (maxNum-minNum) + Number(minNum));
    //console.log(randomNumber);
    //return the value to our main code
    return randomNumber;
}

//create for lopp to get 15 random numbers
for(var i=0; 1<15; i++){
    console.log(randomizr(min,max));
}


//find a random number
//Math.random() - gives a random number between 0 and 1
//Math.round(variable) -basic rounding. .5+ goes up otherwise it goes down
//var randomNumber = Math.random(Math.random() * (max-min) + Number(min);
//console.log(randomNumber);

//ask the user for yes or no question

var yesOrNo= prompt("Please type in yes or no");

//converts text string to all lower case
yesOrNo = yesOrNo.toLowerCase();

while(yesOrNo!="yes" && yesOrNo !="no"){
    yesOrNo=prompt("Please only type in yes or no");
    //converts text string to all lower case
    yesOrNo = yesOrNo.toLowerCase();
}

//Test Values
/* Tested validation with blank and text string. It re-prompted.
Min - 5
Max - 10
code gave me a 9, which is correct
 */