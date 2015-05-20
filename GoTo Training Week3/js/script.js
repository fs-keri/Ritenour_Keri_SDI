/**
 * Keri Ritenour
 * 5/20/15
 * Section 1
 * GoTo Training Week 3
 */

//alert("Testing to see if connected");

//create a calculator that keeps track of how many pears are in a fruit bowl

//Create our virtual fruit bowl as an array
var bowlOfFruit =["apple", "banana", "pear", "peach", "pear", "tomato", "plum", "kiwi", "pear"];

//print our the whole array
console.log(bowlOfFruit);

//to print out a specific fruit, use the index number
//index numbers start with 0, not 1
console.log(bowlOfFruit[0])

//how many items are inside of the array
//property of an array called length
//Dot Syntax - fancy for use a period
console.log(bowlOfFruit.length);

//create a variable to count the number of pears in the array
var totalNumPears = 0;

//test each fruit "item in the array" to see if it is a pear

//if(conditional to test){code that will run if the condition is TRUE}   = sets the value equal to it == or ===
if(bowlOfFruit[0]==="pear"){
    //code inside of here will run IF that item is a pear
    console.log("This is a pear");
    //add 1 to the total number of pears
    totalNumPears++; //will return nothing because it is false because it checked the 0 in the array and it is not a pear, but an apple
    //so we can add an else statement
}else{
    //code inside of here will run IF the item is not a pear
    console.log("Item is not a pear");
}

//Test the second item in the array by changing the index number from 0 to 1
if(bowlOfFruit[1]==="pear"){
    //code inside of here will run IF that item is a pear
    console.log("This is a pear");
    //add 1 to the total number of pears
    totalNumPears++; //will return nothing because it is false because it checked the 0 in the array and it is not a pear, but an apple
    //so we can add an else statement
}else {
    //code inside of here will run IF the item is not a pear
    console.log("Item is not a pear");
}

//Test the third item in the array by changing the index number from 0 to 1
if(bowlOfFruit[2]==="pear"){
    //code inside of here will run IF that item is a pear
    console.log("This is a pear");
    //add 1 to the total number of pears
    totalNumPears++; //will return nothing because it is false because it checked the 0 in the array and it is not a pear, but an apple
    //so we can add an else statement
}else {
    //code inside of here will run IF the item is not a pear
    console.log("Item is not a pear");
}

//Test the fourth item in the array by changing the index number from 0 to 1
if(bowlOfFruit[3]==="pear"){
    //code inside of here will run IF that item is a pear
    console.log("This is a pear");
    //add 1 to the total number of pears
    totalNumPears++; //will return nothing because it is false because it checked the 0 in the array and it is not a pear, but an apple
    //so we can add an else statement
}else{
    //code inside of here will run IF the item is not a pear
    console.log("Item is not a pear");}

//Test the fifth item in the array by changing the index number from 0 to 1
if(bowlOfFruit[4]==="pear"){
    //code inside of here will run IF that item is a pear
    console.log("This is a pear");
    //add 1 to the total number of pears
    totalNumPears++; //will return nothing because it is false because it checked the 0 in the array and it is not a pear, but an apple
    //so we can add an else statement
}else{
    //code inside of here will run IF the item is not a pear
    console.log("Item is not a pear");}


//console log the total number of pears
console.log(totalNumPears+ " total number of pears in the fruit bowl");

//cycling through arrays, For Loop
/*
for(initialize a counting variable; condition to test; increment of change to counting variable){
  code to run for each loop
}
 */

//create new variable to track the number of pears in an array
var pearsTotal = 0;

for(var i=0; i<bowlOfFruit.length; i++){
    //code to run each loop
    console.log("The value of i is "+i);
    //log each item in an array
    console.log(bowlOfFruit[i]);
    //test each item in the array to see if it is a pear
    if(bowlOfFruit[i]==="pear") {
        console.log("item is a pear");
        //add one to total
        pearsTotal++;
    }else{
        console.log("not a pear");
    }
}
console.log("The total number of pears in the bowl is " +pearsTotal);
