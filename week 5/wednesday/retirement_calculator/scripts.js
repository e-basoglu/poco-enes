/* Retirement calculator
Create a program that determines how many years you have left until retirement and the year you can retire. It should prompt for your current age and the age you want to retire and display the output as shown in the example that follows on the next slide. */

//1. Prompt the user for their current age.
let current_age = prompt("Please enter your current age");

//2. Read the current age input from the user and store it in a variable (current_age).
current_age = parseInt(current_age);


//3. Prompt the user for the age they want to retire.
let desired_retirement_age = prompt("Please enter your desired retirement age");

//4. Read the retirement age input from the user and store it in a variable (retirement_age).
desired_retirement_age = parseInt(desired_retirement_age);

//5. Calculate the number of years left until retirement:
let years_left = desired_retirement_age - current_age;


//6. Calculate the year the user can retire:
currentYear = new Date().getFullYear();   
let retirement_year = currentYear + years_left;


/* 7. Display the output:
   Print "You have ___ years left until you can retire." */
console.log(`You have ${years_left} years left until you can retire.`);

//   Print "It's ___ , so you can retire in ___."
// It's 2020, so you can retire in 2060. (For example)
console.log(`It's ${currentYear}, so you can retire in ${retirement_year}.`)
