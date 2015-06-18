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

//convert temperature to fahrenheit or celsius
//create variables
var temperature = Number(prompt("What is the temperature?"));
var degrees = (prompt("Select F to convert to Fahrenheit or C to convert to Celsius:"));
var degCent;

//if Fahrenheit is selected perform this calculation
if(degrees == "F"){
    degCent =  5/9 * (temperature + 32);
    console.log("It is " +degCent+ "\xB0 Fahrenheit");
}else{//if Celsius is selected perform this calculation
    degCent = (temperature - 32) * 5/9;
    console.log("It is " +degCent+ "\xB0 Celsius");
}


//GROUP 2 Multiple Results

//Calculate the grade number of a student and determine the appropriate Letter Grade
// A+ 95-100
// A 90-94
// B+ 85-89
// B 80-84
// C+ 76-79
// C 73-75
// D 70-72
// F 0-69

//Student inputs there scores for each assignment or test
var asgn1 = Number(prompt("Enter your score on Assignment 1:"));
var asgn2 = Number(prompt("Enter your score on Assignment 2:"));
var asgn3 = Number(prompt("Enter your score on Assignment 3:"));
var asgn4 = Number(prompt("Enter your score on Assignment 4:"));
var asgn5 = Number(prompt("Enter your score on Assignment 5:"));
var test1 = Number(prompt("Enter your score on Test 1:"));
var test2 = Number(prompt("Enter your score on Test 2:"));
var test3 = Number(prompt("Enter your score for the Midterm:"));
var test4 = Number(prompt("Enter your score for the Final:"));
var totalPossible = 900;

//calculate the total points earned divided by the total points possible and multiply by 100 to obtain letter grade
var results = Number(((asgn1 + asgn2 + asgn3 + asgn4 + asgn5 + test1 + test2 + test3 + test4)  / totalPossible) * 100);
console.log(results);

//define conditions for determining letter grade
if(results >= 95){
    alert("You have a " +results+ "%, which means you have earned a(n) A+ in the class!");
}else if(results >= 90 && results <= 94){
    alert("You have a " +results+ "%, which means you have earned a(n) A in the class!");
}else if(results >= 85 && results <= 89){
    alert("You have a " +results+ "%, which means you have earned a(n) B+ in the class!");
}else if (results >= 80 && results <= 84){
    alert("You have a " +results+ "%, which means you have earned a(n) B in the class!");
}else if(results >= 76 && results <= 79){
    alert("You have a " +results+ "%, which means you have earned a(n) C+ in the class!");
}else if(results >= 73 && results <= 75){
    alert("You have a " +results+ "%, which means you have earned a(n) C in the class!");
}else if(results >= 70 && results <= 72){
    alert("You have a " +results+ "%, which means you have earned a(n) D in the class!");
}else if(results > 0 && results <= 69){
    alert("You have a " +results+ "%, which means you have earned a(n) F in the class!");
}











