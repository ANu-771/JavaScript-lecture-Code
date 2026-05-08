const school = {
    name: "Codeup",
    location: "San Antonio",

    getDetails() {
        console.log(`School : ${this.name}, Location: ${this.location}`);
    }
};

school.getDetails(); // School : Codeup, Location: San Antonio

//create constructor function

function Person(name, age) {
    this.name = name;
    this.age = age;

    Person.prototype.introduce = function () {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }

}

// const person1 = new Person("Alice", 25);
// const person2 = new Person("Bob", 30);

//es6 class syntax

class Student extends Person {
    #marks; // private field

    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }


    study() {
        return `${this.name} is studying.`;
    }

    setMarks(marks) {
        this.#marks = marks;
    }

    getMarks() {
        return this.#marks;
    }
}
const student1 = new Student("Kamal", 14, "A");
const student2 = new Student("Nimal", 15, "B");

console.log(student1.introduce()); // Hi, I'm Kamal and I'm 14 years old.
console.log(student2.introduce()); // Hi, I'm Nimal and I'm 15 years old.
console.log(student1.study()); // Kamal is studying.

console.log(student1.grade); // A

student1.setMarks(95);
student2.setMarks(88);

console.log(`Your marks is `+ student1.getMarks()); // 95
console.log("marks: " + student2.getMarks()); // marks: undefined


//another class

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    teach() {
        return `${this.name} is teaching ${this.subject}.`;
    }

}

const teacher1 = new Teacher("Mr. Smith", 40, "Math");
console.log(teacher1.introduce());
console.log(teacher1.teach());

// create object using object literal syntax

