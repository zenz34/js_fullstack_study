//console.log([...new Set("122334".split(""))].join(""));

console.log("0 || 1 = " + (0 || 1)); //0 || 1 = true      1
console.log("1 || 2 = " + (1 || 2)); //1 || 2 = true      1
console.log("0 && 1 = " + (0 && 1)); //0 && 1 = false     0
console.log("1 && 2 = " + (1 && 2)); //1 && 2 = true      2

console.log(0.1 + 0.2);
//0.30000000000000004;
console.log(0.1 + 0.2 == 0.3);
//false;
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = "a";

    (function innerFunc(innerArg) {
        var innerVar = "b";

        console.log(
            "outerArg = " +
                outerArg +
                "\n" +
                "innerArg = " +
                innerArg +
                "\n" +
                "outerVar = " +
                outerVar +
                "\n" +
                "innerVar = " +
                innerVar +
                "\n" +
                "globalVar = " +
                globalVar
        );
    })(456);
})(123);
