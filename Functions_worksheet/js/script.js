/**
* Keri Ritenour
* 5/26/15
* Section 1
* GoTo Training Week 4
*/

//alert("Testing to see if connected");


//Example: Calculate the Area of a Rectangle
var width = 5;
var height = 6;
var area = calculateArea(width, height);
console.log("The Area of a Rectangle is " +area);

function calculateArea(w,h){
    return w*h;
}



//Calculate the Circumference of a circle.
// create a variable for the radius
var radius = 2;

//create a variable for the result
var circum = calculateCircum(radius);

//create result to print to console
console.log("The circumference of the circle is " +circum);

//define function
function calculateCircum(radius){
    return ((radius * 2) * 3.14);
}



//Calculate how many bee stings are needed to kill an animal
//create a variable for the victim's weight
var weight = 189;

//create a variable for the result
var stings = calculateSting(weight);

//create result to print to console
console.log("It takes " +stings+ " bee stings to kill this animal.");

//define function
function calculateSting(weight){
    return (weight * 10);
}