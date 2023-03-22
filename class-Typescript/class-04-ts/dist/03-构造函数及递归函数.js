"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 递归实现阶乘
function factorial(n) {
    if (n <= 0) {
        throw Error("error");
    }
    if (n == 1 || n == 2) {
        return n;
    }
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(10));
