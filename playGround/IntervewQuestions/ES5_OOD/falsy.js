// console.log(false == "false");
// console.log(false == "0");
// console.log(null == undefined);

// let set1 = new Set();
// set1.add("a");
// set1.add("a");
// set1.add("b");

// for (let ch of set1) {
//     console.log(ch);
// }

// let map1 = new Map();

// map1.set("a", 1);

// for (let arr of map1) {
//     console.log(arr[0]);
//     console.log(arr[1]);
// }

let obj = {
    a: 1,
    b: 2,
    c: 3
};

Object.keys(obj).forEach(val => console.log(obj[val]));
