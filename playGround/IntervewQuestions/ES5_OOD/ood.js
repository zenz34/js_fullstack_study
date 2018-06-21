// function Man() {
//     this.species = "human being";
// }

// Man.prototype.getSpecies = function() {
//     return this.species;
// };

// function User(name, age) {
//     var name = name; //私有属性
//     //this.name = name; //公有属性
//     this.age = age;
//     this.getName = function() {
//         //私有方法
//         return name;
//     };
//     this.changeName = function(newName) {
//         name = newName;
//     };
// }

// User.prototype = new Man();
// User.prototype.constructor = User;

// User.prototype.getAge = function() {
//     return this.age;
// };

// let zack = new User("Zack", 18);
// console.log(zack.getAge());
// console.log(zack.getSpecies());
// // User.prototype.getName = function() {
// //     //公有方法
// //     return this.name;
// // };
// // User.name = "Wscats"; //静态属性
// // User.getName = function() {
// //     //静态方法
// //     return this.name;
// // };
// // var Wscat = new User("Wscats"); //实例化

// // 调用公有方法，公有属性，我们必需先实例化对象，也就是用new操作符实化对象，就可构造函数实例化对象的方法和属性，并且公有方法是不能调用私有方法和静态方法的
// // let zack = new User("Zack");
// // console.log(zack.getName());
// // zack.changeName("Zachary!");
// // console.log(zack.getName());

// // 静态方法和静态属性就是我们无需实例化就可以调用

// // 而对象的私有方法和属性, 外部是不可以访问的

// let Car = {
//     model: "car1",
//     getModel: function() {
//         let printModel = () => console.log(this.model);
//         printModel();
//     }
// };

// Car.getModel();

// let nissan = Object.create(Car);

// // console.log(nissan.model);

// // const profile = {
// //     name: "",
// //     setName: function(name) {
// //         function printOutName() {
// //             this.name = name;
// //         }
// //         printOutName();
// //     }
// // };

// // profile.setName("Jack");
// // console.log(profile.name === ""); // true
// // console.log(global.name); // Jack

// // const profile = {
// //     name: "",
// //     setName: function(name) {
// //         let printOutName = n => {
// //             this.name = name;
// //         };
// //         printOutName(name);
// //     }
// // };
// // profile.setName("Jack");
// // console.log(profile.name); // Jack

// console.log(String("Zack") == String("Zack"));

// console.log(String("Zack") === String("Zack"));
// String;

// var hero = {
//     _name: "John Doe",
//     getName: function() {
//         let fun = () => {
//             console.log(this._name);
//         };
//         fun();
//     }
// };

// var stoleSe = hero.getName;

// console.log(stoleSe());

let Car = {
    model: "car1",
    getModel: function() {
        return this.model;
    }
};

let func = Car.getModel;
// Car.getModel();

console.log(func.apply(Car));
