/**
 * Keri Ritenour
 * 6/23/15
 * Section 02
 * Functions Worksheet
 */

//testing to see if connected
//alert("Testing to see if connected");

//calculate the area of a rectangle given the width and height of the rectangle
var width = 5;
var height = 6;
var area = calculateArea(width, height);
//print to console
console.log("The Area of the Rectangle is " +area);

//function to calculate area by multiplying width times height
function calculateArea(w,h){
    return w*h;
}


//calculate the circumference of a circle
//create variables
var radius = 10;
var pi = 3.14;
var circumference = calculateCircum(radius, pi);
//print to console
console.log("The circumference of the Circle is " +circumference);

//function to calculate circumference by multiplying radius times pi
function calculateCircum(r, p){
    return r*p;
}


//calculate how many bee stings it would take to kill an animal based on weight
//create variables
var weight = 320; //weight in pounds
var stings = 8.666666667;
var numberStings = calculateStings(weight, stings);
//print to console
console.log("It takes " +numberStings+ " bee stings to kill this animal.");

//function to calculate number of stings per pound to kill animal by multiplying weight times stings
function calculateStings(w,s){
    return w*s;
}