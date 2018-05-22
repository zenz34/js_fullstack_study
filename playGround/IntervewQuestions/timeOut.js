// for (var x = 1; x < 5; x++) {
//     (function(x) {
//         setTimeout(function() {
//             console.log(x);
//         }, x * 1000);
//     })(x);
// }

function sum(a, b) {
    //console.log(arguments);
    if (b === undefined) {
        return function(b) {
            return a + b;
        };
    } else {
        return a + b;
    }
}

//console.log(sum(2, 3)); // Outputs 5

console.log(sum(2)(3)); // Outputs 5
//console.log(sum(2, 3));
