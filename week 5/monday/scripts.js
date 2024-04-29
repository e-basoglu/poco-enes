// 1. login data will be submitted
// 2. validate the password - check if the user exists
// 3. view for user is changing: e.g. logout or for "wrong password" message

// list of user objects with name, email and the password of the user

let users = [
    {
        username : "Khalid",
        password : "test1234",
        email : "khalid@powercoders.org"
    },
    {
        username : "Shakir",
        password : "1234test",
        email : "shakir@powercoders.org"
    },
    {
        username : "Dominic",
        password : "thisIsAv3333rySafePWD!",
        email : "dominic@powercoders.org"
    }
];

//find the form in the DOM and store it in a variable
//querySelector is very general can be used for searching for any element in the DOM
//make it global so that it can be accessed by all functions
const loginForm = document.querySelector("form");

//check the form if event listener is added
loginForm.addEventListener("submit", gatherUserInput);

function gatherUserInput(event){

    event.preventDefault();

/*    let formData = new FormData(event.target);
   const data = Object.fromEntries(formData);
   console.log(data); */

    let user = document.querySelector("#user").value;
    let pwd = document.querySelector("#pwd").value;
    console.log(user, pwd);
    checkIfLoginExists(user, pwd);
}

function checkIfLoginExists(loginUser, loginPwd){
    let userExists = false;
    // check if the user exists in the list of users
    users.forEach(function(user){
     if(user.email === loginUser){
        userExists = true;
        // if loginUser exists, check if its password is same as loginPwd
         if(user.password === loginPwd){
            // if password is correct, call changeViewIfLoggedIn
             changeViewIfLoggedIn();
         } else {
             // else call showErrorMessage
             showErrorMessage();
         }
     } 
 });

    if(!userExists){
        // call showErrorMessage
        showErrorMessage();
    }
 
}


function changeViewIfLoggedIn(){
    console.log("User is logged in");
}

function showErrorMessage(){
    console.log("User is not logged in");
}

