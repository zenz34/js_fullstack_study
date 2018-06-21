/**
 * Check whether an object is Array or not
 * @type Boolean
 * @param {object} subject is the variable that is
 * tested for Array identity check
 */

let subject = ["tom", "jerry"];

function isArrayFn(o) {
    if (Array.isArray) {
        return Array.isArray(o);
    }

    return (
        Object.prototype.toString.call(o) === Object.prototype.toString.call([])
    );
}
var arr = [1, 2, 3, 1];

console.log(isArrayFn(subject)); // true

console.log(isArrayFn([])); // true

// var isArray = (function() {
//     // Use compiler's own isArray when available
//     // if (Array.isArray) {
//     //     return Array.isArray;
//     // }

//     // Retain references to variables for performance
//     // optimization
//     var objectToStringFn = Object.prototype.toString,
//         arrayToStringResult = objectToStringFn.call([]);

//     console.log(arrayToStringResult);

//     console.log(objectToStringFn.call(subject));

//     return function(subject) {
//         return objectToStringFn.call(subject) === arrayToStringResult;
//     };
// })();

// console.log(isArray());

// // console.log(name.toString());
// // console.log([].toString());
