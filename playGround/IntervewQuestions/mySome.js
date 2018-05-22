Array.prototype.mySome = function(callback, context) {
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this)) return true;
    }
    return false;
};

//tests
var passed = [12, 5, 8, 130, 44].mySome(function(element) {
    return element >= 200;
});
console.log("some: " + passed); //some: false

var passed = [12, 5, 8, 130, 44].mySome(function(element) {
    return element >= 100;
});
console.log("some: " + passed); //some: true

// function greet() {
//     var reply = [
//         this.animal,
//         "typically sleep between",
//         this.sleepDuration
//     ].join(" ");
//     console.log(reply);
// }

// var obj = {
//     animal: "cats",
//     sleepDuration: "12 and 16 hours"
// };

// greet.call(obj); // cats typically sleep between 12 and 16 hours
