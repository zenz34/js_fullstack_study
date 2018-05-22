// for (var x = 1; x < 5; x++) {
//     (function(x) {
//         setTimeout(function() {
//             console.log(x);
//         }, x * 1000);
//     })(x);
// }
// var arr = [0, 1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//     //为当前数组项即当前 p 对象添加一个名为 i 的属性,值为循环体的 i 变量的值,
//     //此时当前 p 对象的 i 属性并不是对循环体的 i 变量的引用,而是一个独立p 对象的属性,属性值在声明的时候就确定了
//     //(基本类型的值都是存在栈中的,当有一个基本类型变量声明其等于另一个基本变量时,此时并不是两个基本类型变量都指向一个值,而是各自有各自的值,但值是相等的)
//     arr[i].i = i;
//     arr[i].onclick = function() {
//         alert(this.i);
//     };
// }
const temp = "HELLO";
console.log(temp.split("").join("_"));

let input = [1, [2, 3], [4, 5, 6]];
console.log([input[0], ...input[1], ...input[2]]);
