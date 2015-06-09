/**
 * Keri Ritenour
 * 6/8/15
 * Section 02
 * Week 2 - Order of Operations
 */

/*Expressions - PEMDAS - The Order of Operations
    P = parentheses
    E = exponents
    M = multiplication
    D = division
    A = addition
    S = subtraction
  */

var quiz1 =87;
var quiz2= 100;
var quiz3 = 60;
var quiz4 = 80;

//the average is the sum of the items divided by the number of items
var average = (quiz1 + quiz2 + quiz3 + quiz4) / 4;
//console.log(average);

//You need to use parentheses when you need to specify one operation over another

var length = 7;
var width = 6;
var perimeter = length * 2 + width * 2; //since multiplication happens first, you don't need parentheses
console.log(perimeter);
