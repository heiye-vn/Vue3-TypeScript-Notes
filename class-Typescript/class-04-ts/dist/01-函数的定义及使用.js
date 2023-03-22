"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*       函数（Function）：函数是 JavaScript 应用程序的基础，他帮助你实现抽象层、模拟类、信息隐藏和模块。在 TypeScript 中，虽然已经支持类、命名空间和模块，但
*                       函数仍然是用于定义行为的方式。只是 ts 在函数上增加了额外的功能
*
*       函数分为：具名函数、匿名函数、箭头函数
*
*       为函数定义类型：在 js 中，并没有对函数参数及函数返回值有明确的类型规定，默认为 any 类型。因此，在 ts 中，为了更加严谨，可以给函数参数和函数返回值添加类型注解
*                    ts 能够根据返回语句推断出返回值的类型，因此可以省略
*
* */
// 1. 具名函数（函数声明）
function foo(x, y) {
    return x + y;
}
foo(1, 2);
// 2.匿名函数（函数表达式）
const sayHi = function (msg) {
    return msg;
};
sayHi("hello");
// 3. 箭头函数
const arrowFunc = (name, age) => {
    return `my name is ${name}, ${age} years old`;
};
arrowFunc("小明", 18);
let z = 100;
function addToZ(x, y) {
    return x + y + z;
}
addToZ(10, 20);
/*
*       完整函数的书写方式
*
*       (baseValue: number, increment: number) => number：当前这个函数的类型
*
*       function(x: number, y: number): number { return x + y; }：符合上面函数类型的值
*
*       只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确
* */
const myAdd = function (x, y) {
    return x + y;
};
