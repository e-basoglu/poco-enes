/* Odd / even reporter
Prompt for a number between 0 and 20.
Check if the given number is even or odd.
Report the result to the screen (e.g. "2 is even"). */



let number = Number(prompt("Please enter a number between 0 and 20"));

if (number % 2 === 0) {
    alert(`${number} is even`);
} else {
    alert(`${number} is odd`);
}