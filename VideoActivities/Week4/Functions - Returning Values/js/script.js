/**
 * Keri Ritenour
 * 6/22/15
 * Section 02
 * Week 4 - Functions - Returning Values
 */

//alert("Testing to see if connected");

var total = calcArea(30, 20);

function calcArea(w, h){
    var area = w * h;
    return area; //function is spitting information out
}

//functions that are returning should be assigned to variables, hence total = calcArea
//then console.log the variable to return the result

console.log(total);


