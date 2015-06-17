/**
 * Keri Ritenour
 * 6/16/15
 * Section 02
 * Week 3 - Chapter Examples
 */

//alert("Testing to see if connected");

var degFahren = Number(prompt("Enter the degrees Farenheit"));
var degCent;

degCent = 5/9 * (degFahren -32);
console.log(degFahren + "\xB0 Fahrenheit is " + degCent + "\xB0 centigrade");

if(degCent < 0){
    console.log("That's below the freezing point of water.");
}
if(degCent == 100){
    console.log("That's the boiling point of water");
}
