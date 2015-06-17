/**
 * Keri Ritenour
 * 6/16/15
 * Section 02
 * Week 3 - Chapter Examples
 */

//alert("Testing to see if connected");

/*var degFahren = Number(prompt("Enter the degrees Farenheit"));
var degCent;

degCent = 5/9 * (degFahren -32);
console.log(degFahren + "\xB0 Fahrenheit is " + degCent + "\xB0 centigrade");

if(degCent < 0){
    console.log("That's below the freezing point of water.");
}
if(degCent == 100){
    console.log("That's the boiling point of water");
}
*/

var myAge = Number(prompt("Enter your age"));

if(myAge >=0 && myAge <= 10){
    console.log("myAge is between 0 and 10");
}
    if(!(myAge >= 0 && myAge <= 10)){
        console.log("myAge is NOT between 0 and 10");
    }
        if(myAge >= 80 || myAge <= 10){
            console.log("myAge is 80 or above or 10 or below");
        }
            if((myAge >= 30 && myAge <= 39) || (myAge >= 80 && myAge <= 89)){
                console.log("myAge is between 30 and 39 or myAge is between 80 and 89");
            }
