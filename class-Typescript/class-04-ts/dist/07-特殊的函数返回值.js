"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
const voidTest1 = function () {
    return 333;
};
// console.log(voidTest1());
const voidTest2 = () => {
    return "hello world";
};
// console.log(voidTest2());
// 声明函数时如果标注返回类型为 void，时返回除 undefined 和 null 之外的值会报错
const voidTest3 = function () {
    // return 333;  Type 'number' is not assignable to type 'void'
    // return new Error('error')   Type 'Error' is not assignable to type 'void'
    return null;
};
console.log(voidTest3());
