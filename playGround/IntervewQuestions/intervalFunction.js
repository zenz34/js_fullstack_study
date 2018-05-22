// 启动setInterval
setInterval(() => {
    // in case it's empty
    if (arr.length === 0) {
        return;
    }
    let i = 0;
    while (i < arr.length) {
        arr[i]();
        i++;
    }
    arr.splice(0, i);
}, 5000);

function logCurSecond() {
    let time = new Date();
    console.log(time.getMinutes() + " : " + time.getSeconds());
}

/* 

function intervalCall(func) {
    arr.push(func);
}

*/

function intervalCall() {
    arr.push(logCurSecond);
}

intervalCall();
intervalCall();
intervalCall();

setTimeout(intervalCall, 6000);
setTimeout(intervalCall, 6050);
setTimeout(intervalCall, 7000);

setTimeout(intervalCall, 10100);
setTimeout(intervalCall, 11000);

setTimeout(intervalCall, 20000);
