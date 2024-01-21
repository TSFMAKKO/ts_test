class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}

const dog = new Dog("Buddy");
dog.move(10);
dog.bark();
