// CODE here for your Lambda Classes

// === Person Class === //

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return (`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

// === Instructor Class ===

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return (`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        return (`${student.name} recieves a perfect score on ${subject}`);
    }

}

// === Student Class === // 

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        return (`'HTML', 'Javascript', 'CSS', 'The Dark Arts'`);
    }
    PRAssignment(subject) {
        return (`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}`);
    }
}

// === Project Manager Class === //

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(Web24_lecture) {
        return (`${this.name} announces to Web24_lecture, @channel Stand Up time!`);
    }
    debugsCode(student, subject) {
        return (`${this.name} debugs ${student.name}'s code on ${subject}`);
    }


}


// === Objects Here === //

const Harry = new Student ({
    name: 'Harry',
    location: 'Godrics Hollow',
    age: 16,
    favLanguage: 'Parseltongue',
    specialty: 'Master of Death',
    catchPhrase: 'Expecto Patronum',

});

const Hermione = new Student ({
    name: 'Hermione Granger',
    location: 'The Library',
    age: 15,
    favLanguage: 'C',
    specialty: 'Time Travel',
    catchPhrase: 'LeviOsa, not LeviosA',
});

const Severus = new Instructor ({
    name: 'Severus Snape',
    location: 'Slytherin',
    age: 40,
    favLanguage: 'Java',
    specialty: 'Being Awesome',
    catchPhrase: 'There will be no wand waving or silly incantations',

});

const Hagrid = new Instructor ({
    name: 'Rubeus Hagrid',
    location: 'Hogwarts',
    age: 115,
    favLanguage: 'Ruby',
    specialty: 'GameKeeper',
    catchPhrase: 'You\'re a wizard Harry',

})

const Albus = new ProjectManager ({
    name: 'Albus Dumbledore',
    location: 'Hogwarts',
    age: 234,
    favLanguage: 'C#',
    specialty: 'Chief Warlock',
    catchPhrase: 'You\'re a wizard Harry',

})

const Ryan = new ProjectManager ({
    name: 'Ryan the Wizard',
    location: 'Hogwarts',
    age: 134,
    favLanguage: 'C#',
    specialty: 'Headmaster at Hogwarts',
    catchPhrase: 'Yippie-Ki-Yay, MotherF-----!',

})

// === Test Console Logs === //

console.log(Harry.location);
console.log(Ryan.catchPhrase);
console.log(Albus.specialty);

console.log(Hermione.speak());
console.log(Harry.speak());
console.log(Severus.speak());
console.log(Hagrid.speak());

console.log(Hagrid.demo("Magical Creatures"));
console.log(Ryan.grade(Hermione, "Potions"));

console.log(Harry.listsSubjects());
console.log(Hermione.PRAssignment("CSS"));
console.log(Harry.sprintChallenge("Patronus Charms"));



console.log(Albus.standUp());
console.log(Ryan.standUp());
console.log(Albus.debugsCode(Harry, "Javascript"));
console.log(Ryan.debugsCode(Hermione, "React"));






