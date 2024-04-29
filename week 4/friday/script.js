const itTrainers = [{
    name: "Marcel",
    firstTime: true,
    skills: [{
        language: "HTML",
        level: "intermediate",
    }, {
        language: "CSS",
        level: "intermediate",
    }, {
        language: "JavaScript",
        level: "beginner",
    }],
    getLevelOfLanguage: function (language) {
        /* for (let i = 0; i < this.skills.length; i++) {
            if (this.skills[i].language === language) {
                return this.skills[i].level;
            }
        } */
        this.skills.forEach(function (skill) {
            if (skill.language.toLowerCase === language.toLowerCase) {
                return skill.level;
            }
        });
    }
},
{
    name: "Salvatore",
    firstTime: false,
    skills: [{
        language: "HTML",
        level: "intermediate",
    }, {
        language: "CSS",
        level: "intermediate",
    }, {
        language: "JavaScript",
        level: "beginner",
    }],
    getLevelOfLanguage: function (language) {
        /* for (let i = 0; i < this.skills.length; i++) {
            if (this.skills[i].language === language) {
                return this.skills[i].level;
            }
        } */
        this.skills.forEach(function (skill) {
            if (skill.language.toLowerCase === language.toLowerCase) {
                return skill.level;
            }
        });
    }
}]


itTrainers.forEach(function (itTrainer) {
    console.log(itTrainer.name);
    console.log(itTrainer.firstTime);
    console.log(itTrainer.skills);
    itTrainer.getLevelOfLanguage("javascript");
})


// DOM MANIPULATION

/* document.querySelectorAll("#red")
document.querySelectorAll(".highlight")
document.querySelectorAll("p") */
document.querySelectorAll("strong:not(#red)").textContent = "Hello Oerlikon";

let h2Tag = document.createElement("h2"); // create a new h2 tag
let pTag = document.querySelector("p"); // select existing element
h2Tag.textContent = "I love to be in Oerlikon";
// pTag.after(h2Tag); 
pTag.insertAdjacentElement("afterend", h2Tag); // add h2Tag after the pTag
