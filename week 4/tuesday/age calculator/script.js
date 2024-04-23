/* Want to find out how old you'll be? Calculate it!

Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
Output them to the screen/console like so: "I will be either NN or NN in YYYY", substituting the values. */

/* let birthYear = 1987;
let futureYear = 2050;

let age1 = futureYear - birthYear;
console.log(`I will be either ${age1} or ${age1 - 1} in ${futureYear}`); */







/* 
let birthYear = Number(prompt ("Please enter your birth year"));
let birthMonth = Number(prompt ("Please enter your birth month"));
let birthDay = Number(prompt ("Please enter your birth day"));

let futureYear = Number(prompt ("Please enter your future year"));
let futureMonth = Number(prompt ("Please enter your future month"));
let futureDay = Number(prompt ("Please enter your future day"));

let age1 = futureYear - birthYear;
console.log(typeof birthYear)
console.log(typeof futureYear)


if (!birthDay ||!birthMonth ||!birthYear ||!futureDay ||!futureMonth ||!futureYear) {
    alert("Please enter a valid value ");
} else if (birthYear > futureYear) {
    alert("Future year should be greater than birth year");
} else {
    if (birthMonth > futureMonth) {
        alert(`I will be ${age1-1} in ${futureYear}`);
    } else if (birthMonth === futureMonth) {
        if (birthDay > futureDay) {     
            alert(`I will be ${age1-1} da in ${futureYear}`);
        } else {
            alert(`I will be ${age1} in ${futureYear}`);
        }
    } else {
        alert(`I will be ${age1} in ${futureYear}`);
    }
}
 */




/* 
document.getElementById('ageYear').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let birthDate = new Date(document.getElementById('birthDate').value);
    let futureDate = new Date(document.getElementById('futureDate').value);

    // Calculate age
    let ageInMilliseconds = futureDate - birthDate;
    let ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    let remainingDays = Math.floor((ageInMilliseconds % (365 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    // Extract months and days from remaining days
    let ageInMonths = Math.floor(remainingDays / 30);
    let ageInDays = remainingDays % 30;

    // Display the result on the UI
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your age is ${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days.`;
}); */








document.getElementById('ageYear').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let birthDate = new Date(document.getElementById('birthDate').value);
    let futureDate = new Date(document.getElementById('futureDate').value);

    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth() + 1; 
    let birthDay = birthDate.getDate();

    let futureYear = futureDate.getFullYear();
    let futureMonth = futureDate.getMonth() + 1;
    let futureDay = futureDate.getDate();

    let ageYears = futureYear - birthYear;
    let ageMonths = futureMonth - birthMonth;
    let ageDays = futureDay - birthDay;


    let resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
});




