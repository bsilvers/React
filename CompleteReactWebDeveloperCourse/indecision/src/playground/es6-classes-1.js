
class Person {
    
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()) {
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student('Brian Silvers', 46, 'Computer Science');
// console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Student();
//console.log(other.getGreeting());
console.log(other.getDescription());

const me2 = new Traveler('Brian Silvers', 46, 'Chicago');
console.log(me2);
console.log(me2.getGreeting()); 


const me3 = new Traveler(undefined, undefined, 'Nowhere');
console.log(me3);
console.log(me3.getGreeting()); 