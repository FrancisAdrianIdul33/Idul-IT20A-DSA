class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    eat() {
        console.log(this.name + " is Eating.");
        document.getElementById("output").innerHTML += this.name + " is Eating.<br>";
    }
    sleep(){
    console.log(this.name + " is Eating.");
        document.getElementById("output").innerHTML += this.name + " is Eating.<br>";
    }
    play(){
    console.log(this.name + " is Eating.");
        document.getElementById("output").innerHTML += this.name + " is Eating.<br>";
    }

}

let dog = new Animal("Dog", "Mammal");

dog.eat();
dog.sleep();
dog.play();