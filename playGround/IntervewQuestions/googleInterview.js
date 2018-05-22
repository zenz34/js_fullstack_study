/*
To implement a function 500 ms interval.


limitedDoSomething = rateLimit(doSomething, 500);
limitedOtherThing = rateLimit(otherThing, 20);


*/
// key : funcName  value : timerID
let map = new Map();

function doSomething() {
    console.log("Hello world!");
    let time = new Date();
    console.log(time.getMinutes() + " : " + time.getSeconds());
}

function otherThing() {
    console.log("World US!");
    let time = new Date();
    console.log(time.getMinutes() + " : " + time.getSeconds());
}

function rateLimit(func, blockDuration) {
    console.log(func.name);
    if (map.has(func.name)) {
        return;
    }

    let timerID = setTimeout(() => {
        map.delete(func.name);
    }, blockDuration);
    map.set(func.name, timerID);
    return func;
}

let limitedDoSomething = rateLimit(doSomething, 5000);
limitedDoSomething();
limitedDoSomething(); // won't print
setTimeout(limitedDoSomething, 6000);
setTimeout(limitedDoSomething, 7000); // won't print
setTimeout(limitedDoSomething, 12000);

// let limitedOtherThing = rateLimit(otherThing, 2000);
// limitedOtherThing();
// limitedOtherThing(); // won't print
// setTimeout(limitedOtherThing, 600);
// setTimeout(limitedOtherThing, 680); // won't print
// setTimeout(limitedOtherThing, 1200);
