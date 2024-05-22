// Clase base Person
class Person {
    constructor(name, age, genre) {
        this.name = name;
        this.age = age;
        this.genre = genre;
    }

    obtDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Genre: ${this.genre}`);
    }
}

// Clase Student que hereda de Person
class Student extends Person {
    constructor(name, age, genre, course, group) {
        super(name, age, genre);
        this.course = course;
        this.group = group;
    }

    register() {
        console.log(`Student ${this.name} is registered in course ${this.course} group ${this.group}.`);
    }
}

// Clase Teacher que hereda de Person
class Teacher extends Person {
    constructor(name, age, genre, subject, level) {
        super(name, age, genre);
        this.subject = subject;
        this.level = level;
    }

    assign() {
        console.log(`Teacher ${this.name} is assigned to teach ${this.subject} at level ${this.level}.`);
    }
}

// Crear una nueva instancia de Student
const student = new Student("Alice", 20, "Female", "Math", "A");
student.obtDetails();
student.register();

// Crear una nueva instancia de Teacher
const teacher = new Teacher("Bob", 45, "Male", "Physics", "Advanced");
teacher.obtDetails();
teacher.assign();


//extra
// Define the Warrior class
class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }

    // Method to return the warrior's power
    attack() {
        return this.power;
    }

    // Method to decrease warrior's life by the given damage and print the remaining life
    defend(damage) {
        this.life -= damage;
        console.log(`Remaining life: ${this.life}`);
    }
}

// Define the Maya class, extending the Warrior class
class Maya extends Warrior {
    constructor() {
        // Set initial values for Maya: 100 life and 20 power
        super(100, 20);
    }

    // Method to increase Maya's power by 10
    drinkColaCao() {
        this.power += 10;
        console.log("Maya drinks Cola Cao and increases her power!");
    }
}

// Define the Aztec class, extending the Warrior class
class Aztec extends Warrior {
    constructor() {
        // Set initial values for Aztec: 100 life and 20 power
        super(100, 20);
    }

    // Method to increase Aztec's life by 10
    drinkNesquik() {
        this.life += 10;
        console.log("Aztec drinks Nesquik and increases his life!");
    }
}

// Create instances of Maya and Aztec classes
const maya = new Maya();
const aztec = new Aztec();

// Perform the sequence of attacks as specified in the task
aztec.drinkNesquik();    // Aztec drinks Nesquik
maya.drinkColaCao();      // Maya drinks Cola Cao
maya.attack();            // Maya attacks Aztec
aztec.defend(maya.attack()); // Aztec defends
aztec.attack();           // Aztec attacks Maya
maya.defend(aztec.attack()); // Maya defends
