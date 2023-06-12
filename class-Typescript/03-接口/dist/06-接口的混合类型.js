"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*       接口的混合类型
*           接口约束的内容有属性、方法、函数
* */
// 场景：实现数值的累加
// 1. 使用全局变量（会污染全局）
let count = 0;
function addVal1() {
    count++;
    console.log(count);
}
// for(let i = 0;i < 3;i++){
//     addVal1()
// }
// 2. 使用闭包
let addVal2 = (() => {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    };
})();
let addVal4 = (function () {
    let fn = function () {
        fn.count++;
        console.log(fn.count);
    };
    fn.count = 0;
    return fn;
})();
for (let i = 0; i < 3; i++) {
    addVal4();
}
console.log("============================================================================");
0;
function addVal5(arg) {
    let sum = function () {
    };
    sum.count = arg || 0;
    sum.add = function () {
        sum.count++;
        console.log(sum.count, '---add');
    };
    return sum;
}
let res = addVal5(10);
for (let i = 0; i < 3; i++) {
    res.add();
}
console.log("============================================================================");
function getLib(val) {
    // let lib = (()=>{}) as Lib;      // 声明 lib 为一个函数，断言为 Lib
    let lib = function () {
    };
    lib.version = val || "1.0";
    lib.doSomething = function () {
        console.log("do something");
    };
    return lib;
}
let result = getLib("2.1.5");
// result();
console.log(result.version);
result.doSomething();
