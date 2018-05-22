// 2 coding question. Implement Array.myFilter(callback);?

// var result = [20, 30, 50, 60, 70].myfilter(function(element) {
//     return element >= 200;
// });

// console.log("result: " + result); //should print false

// console.log("result: " + result); //should print true

Array.prototype.myFilter = function(callback) {
    for (var i = 0; i < this.length; i++) {
        if (callback.call(undefined, this[i], i, this) === true) {
            return true;
        }
    }
    return false;
};

var result = [120, 200, 400, 199, 120].myFilter(function(element) {
    return element >= 100;
});

console.log(result);

var result2 = [120, 200, 400, 199, 120].myFilter(function(element) {
    return element >= 500;
});
console.log(result2);
// Array.prototype.mySome = function(callback, context) {
//     for (var i = 0; i < this.length; i++) {
//         if (callback.call(context, this[i], i, this)) return true;
//     }
//     return false;
// };

// //tests
// var passed = [12, 5, 8, 130, 44].mySome(function(element) {
//     return element >= 200;
// });
// console.log("some: " + passed); //some: false

// var passed = [12, 5, 8, 130, 44].mySome(function(element) {
//     return element >= 100;
// });
// console.log("some: " + passed); //some: true
