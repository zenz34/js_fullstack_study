// const profile = {
//     firstName: "",
//     lastName: "",
//     setName: function(name) {
//         let splitName = function(n) {
//             let nameArray = n.split(" ");
//             this.firstName = nameArray[0];
//             this.lastName = nameArray[1];
//         };
//         splitName(name);
//     }
// };

// profile.setName("John Doe");
// console.log(global.firstName);
// console.log(profile.firstName);

// const profile = {
//     name: "",
//     setName: function(name) {
//         function printOutName() {
//             this.name = name;
//         }
//         printOutName();
//     }
// };

// profile.setName("zack");
// console.log(profile.name === "");
// console.log(global.name);

// const profile = {
//     name: "",
//     setName: function(name) {
//         console.log("hi");
//         let printOutName = n => {
//             this.name = name;
//         };
//         printOutName(name);
//     }
// };
// // profile.setName("Jack");
// // console.log(profile.name); // Jack

// let fun = profile.setName;

// fun("Jack");
// console.log(profile.name); // Jack
// console.log(global.name);

// var obj = {
//     i: 10,
//     b: () => console.log(this.i, this),
//     c: function() {
//         console.log(this.i, this);
//         () => {
//             console.log(this.i, this);
//         };
//     }
// };
// obj.b();
// // undefined Window
// obj.c();
// // 10, Object {...}

function foo() {
    return () => {
        return () => {
            return () => {
                console.log("id:", this.id);
            };
        };
    };
}

var f = foo.call({ id: 1 });

// console.log(f);

var t1 = f.call({ id: 2 })()();

console.log(t1);

// var t2 = f().call({ id: 3 })();
// console.log(t2);

// var t3 = f()().call({ id: 4 });

// console.log(t3);
