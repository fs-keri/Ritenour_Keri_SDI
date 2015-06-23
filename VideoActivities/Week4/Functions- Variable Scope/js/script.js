/**
 * Keri Ritenour
 * 6/22/15
 * Section 02
 * Week 4 - Functions - Variable Scope
 */

alert("Testing to see if connected");

//what happens when 2 variables have the same name

//functions prefer to use the variables within their function
var width = 5; //this width is scoped to the larger document

function calcArea(){
    var width = 20;  //this width is scope to calcArea
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea();
