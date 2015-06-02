/**
 * Keri Ritenour
 * 5/26/15
 * Section 1
 * Functions - Anonymous Functions
 */



//if we ever wanted to call the function it would only work if you assign it to a variable name
var functionName = function(){
    //code to run
}

functionName();

//define function
var calcArea = function(width, height){
    //code the function runs
    var area = width * height;
    return area;
}

calcArea(20,30);//invoking function


//var a = calcArea(20,30);
//console.log(a); to check to see if it is working


//must define function and then invoke