// Defining Object

const student = {
    name: "Olena",
    age: 25,
    skills: ["HTML", "CSS", "JavaScript","Java", "React", "C#"],
    hasInternship: false,
    //add a function
    checkIntershipStatus: function(){
        if(this.hasInternship){
            console.log("Congratulations! You have an internship!")
        } else {
            console.log("Sorry, you don't have an internship")
        }
    }

}

/* Object constructor */
function StudentConstructor(name, age, skills, hasInternship) {
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.hasInternship = hasInternship;
    this.checkIntershipStatus = function(){
        if(this.hasInternship){
            return "Congratulations! You have an internship!";
        } else {
            return "Sorry, you don't have an internship";
        }
        // ternary operator
        // return this.hasInternship ? "Congratulations! You have an internship!" : "Sorry, you don't have an internship";
    }

}

//* Class */
class StudentClass {
    constructor(name, age, skills, hasInternship) {
        this.name = name;
        this.age = age;
        this.skills = skills;
        this.hasInternship = hasInternship;     
}
    checkIntershipStatus(){
        if(this.hasInternship){
            return "Congratulations! You have an internship!";
        } else {
            return "Sorry, you don't have an internship";
        }
    }
}



const vlad = new StudentClass("Vlad", 25, ["HTML", "CSS", "JavaScript","Java", "React", "C#"], true);

const violetta = new StudentClass("Violetta", 24, ["HTML", "CSS", "JavaScript","Java", "React", "C#"], false);

const olena = new StudentClass(student)

console.log(olena.name)

console.log(vlad.name);
console.log(vlad.checkIntershipStatus());

console.log(violetta.name);
console.log(violetta.checkIntershipStatus());



