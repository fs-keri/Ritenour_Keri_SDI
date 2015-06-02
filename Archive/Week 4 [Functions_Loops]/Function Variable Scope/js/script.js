/**
 * Keri Ritenour
 * 5/26/15
 * Section 1
 * Functions - Variable Scope
 */

var width = 5; //this is scoped outside of the function or the larger document containing it

//setting up the function
function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}


//Call the function
calcArea();  //this will prefer to always use the variable within the function
            //in this case, we say the width variable is scoped to calcArea

//if we type console.log(width) before the calcArea, the result will be 5