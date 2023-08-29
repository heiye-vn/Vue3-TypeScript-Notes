"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*       函数兼容性：在TS中，函数兼容性指的是在类型系统中判断一个函数能否赋值给另一个函数类型。当两个函数有相同的参数列表和返回类型时，它们被认为是兼容的。
*
*       兼容性规则：
*           1.参数个数：如果目标函数的参数个数小于等于源函数的参数个数，则他们是兼容的
*
*           2.参数类型：如果目标函数的参数类型可以分别赋值给源函数的对应参数类型，那么它们是兼容的。意味着目标函数的参数类型必须是源函数参数类型的子类型。
*
*           3.返回类型：如果目标函数的返回类型可以分别赋值给源函数的返回类型，那么它们是兼容的。
*
* */
// 参数个数：参数少的函数可以赋值给参数多的函数
var a;
(function (a_1) {
    let fn1 = (x, y) => { };
    let fn2 = (a) => { };
    fn1 = fn2;
    console.log(fn1);
})(a || (a = {}));
// 参数类型必须相同
var b;
(function (b) {
    let func1 = (name, age) => { };
    let func2 = (address) => { };
    func1 = func2;
})(b || (b = {}));
// 函数返回值必须相同(依赖参数类型也相同)
var c;
(function (c) {
    let func1 = (x, y) => { return ''; };
    let func2 = (id, name, age) => { return ''; };
    func2 = func1;
})(c || (c = {}));
