/**
 * Keri Ritenour
 * 6/9/15
 * Section 02
 * Expressions Worksheet
 */

//alert("Testing to see if connected");

/*Problem: Calculate the area of a circle given the radius of a circle.
    Givens:
        The radius of the circle.
        The constant value of Pi.
    Result Variable:
        The area of the circle.

    Result to Print:
    “The circumference of the circle is x”;
*/
//Calculate the circumference of a circle;
var radius = 6;
const Pi = 3.14159265;

//multiply 2, PI and the radius & assign to circ variable.
var circ = radius * 2 * Pi;

//print out the output circumference
console.log("The circumference of the circle is " +circ);
