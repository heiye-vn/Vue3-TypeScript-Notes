"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*       object类型
*           object 表示非原始类型，也就是除了 number、string、boolean等基本数据类型之外的类型
*
* */
let obj = new Object();
obj = new String("string");
obj = new Number(111);
// obj = Symbol('111')
obj = null;
obj = undefined;
obj = {
    name: "张三",
    age: 30
};
// console.log(obj);
function fn(obj) {
    return obj;
    // return {}
    // return undefined
    // return null
}
console.log(fn(new String("abc")));
console.log(fn(String));
