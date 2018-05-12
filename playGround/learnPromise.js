// wrong
new Promise(function() {
    setTimeout(function() {
        throw "or nah";
        // return Promise.reject('or nah'); also won't work
    }, 1000);
}).catch(function(e) {
    console.log(e); // doesn't happen
});

//  correct
function timeOut(timeOut) {
    return new Promise(resolved => {
        setTimeout(resolved, timeOut);
    });
}

timeOut(1000)
    .then(() => {
        throw "worky!";
    })
    .catch(error => {
        console.log("welcome to beijing");
        console.log(error);
    });

/*
timeout(1000).then(function () {
    throw 'worky!';
    // return Promise.reject('worky'); also works
}).catch(function (e) {
    console.log(e); // 'worky!'
});
*/
