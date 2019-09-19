// CODE here for your Lambda Classes

// === Person Class === //

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
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
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student,subject) {
        console.log(`${student.name} recieves a perfect score on ${subject}`);
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
        console.log //not sure what to put here
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge() {
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(web24_lecture) {
        console.log(`${name} announces to ${Web24_lecture}, @channel Stand Up time!`);
    }
    debugsCode(student) {
        console.log(`${name} debugs ${student.name}'s code on ${subject}`);
    }


}


// === Objects Here === //

