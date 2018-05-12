let arr = [0, 1, 2, { 3: 4 }];

let val1 = arr[1];

let val2 = arr[3];

arr[1] = null;

arr[3] = { 3: 5 };

arr = [null, null, null, null];

console.log(val1);

console.log(val2[3]);
