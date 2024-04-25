let strSample = "Tugba";

// name of the variable     --> strSample

// variable data type       --> string

// value of the variable    --> Tugba

// let, const, var          -->  keywords to declare the variable

// = assigns the value to variable

const eyeColorOfDominic = "green";

// eyeColorOfDominic = "blue";

// console.log(eyeColorOfDominic); // we cannot reassign the color since it is const 


/////////////////////////CONDITIONALS///////////////////////////


if(strSample === "Tugba"){
    console.log("Hello, so great to see you");
} else {
    console.log("You are not Tugba");
}

let condition; // undefined
condition = true; // true
while(condition){
console.log("While: Condition is true")
condition = false;
}


/////////////////////////////LOOP ////////////////////////////

//   initiate              condition           iteration
for(let condition = true; condition === true; condition = false) {
    console.log("For: Condition is true")
}
// This is another way of defining for loops


for(let i = 0; i <1; i++) {
    console.log("Normal For loop: Condition is true")
}


do{
    console.log("Do: Condition is true")
} while(condition);

// Array is a data type
// Array = list of data
const colors = ["green", "blue", "black"]; //square brackets
console.log(colors[1]);  //we call it with index numbers

colors.forEach(function(color){
    console.log(color);
})

colors.forEach(function(color){
    //console.log(color);
    if(color === eyeColorOfDominic){
        console.log(color + " is Dominic's eye color");
        console.log(`Dominic has ${eyeColorOfDominic} eye color`)
    }
    color===eyeColorOfDominic && console.log(color + " is eye color of Dominic") 
})

///////////////////////////FUNCTIONS///////////////////////////


let userEyeColor = "black";
let userName = "Tugba";

function checkEyeColor(userEyeColor, userName) {
    colors.forEach(function(color){
        if(color === userEyeColor){
            console.log(color + " is Dominic's eye color");
            console.log(`${color} is your eye color, ${userName}`)
        }
    });
}

checkEyeColor(userEyeColor, userName);
// order of the parameters is so important
userName = "Susanne";
checkEyeColor("blue", "Susanne");









