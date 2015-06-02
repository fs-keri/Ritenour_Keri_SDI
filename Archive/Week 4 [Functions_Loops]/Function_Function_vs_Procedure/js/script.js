/**
 * Keri Ritenour
 * 5/26/15
 * Section 1
 * Functions - Functions vs Procedures
 */


//this is a function
function calcAreaF(width, height) {
    var area = width * height;
    return area;
}

//this is a procedure
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); //no return
}