function Animal(type) {
    this.type = type;
    this.behavior = function() {
        console.log(this.type + " is running");
    };
}
Animal.prototype.action = function() {
    console.log("running");
};

function Cat(name, type, age, kind) {
    this.name = name;
    Animal.call(this, type);
}

Cat.prototype = new Animal();
let cat1 = new Cat("wsscat", "cute", 1, "kitty");
console.log(cat1);
cat1.behavior();
cat1.action(); //running
