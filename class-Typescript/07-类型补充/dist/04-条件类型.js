"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*       条件类型
*           TS 中的条件类型就是在类型中添加分支，以支持更加灵活的泛型，满足更多的使用场景
*           TS 中内置条件类型是内部封装好的一些类型处理，可以直接使用
* */
var a;
(function (a) {
    // 1. 在类型中添加条件分支
    let con1 = { name4: 'sky' };
    // console.log(con1);
    // 2. 条件类型分发
    let con2 = { name2: 'water' };
    // console.log(con2);
    let con3 = { name4: 'sky' };
    // console.log(con3);
    let con4 = { name2: 'water', name4: 'sky' };
    // console.log(con4);
})(a || (a = {}));
var b;
(function (b) {
    let con1 = { name4: 'water' };
    console.log(con1);
})(b || (b = {}));
