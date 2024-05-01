/* Which number is bigger?
Declare 2 variables, both numbers
Compare which number is greater
Log the output, e.g. "The greater number of 5 and 10 is 10."
Add an output for the else statement, e.g. "The smaller number of 5 and 10 is 5." */

let number1 = 24;
let number2 = 30;

if (number1 > number2) {
    console.log(`The greater number of ${number1} and ${number2} is ${number1}`)
} else if (number1 < number2) {
    console.log(`The smaller number of ${number1} and ${number2} is ${number1}`)
} else {
    console.log("The numbers are equal")
}