"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let p = {
    name: '王子文',
    age: 25
};
let p1 = {
    name: '金喜善',
    age: 55
};
let p2 = {
    name: '宋祖儿',
    age: "20"
};
let p3 = {
    name: 666,
    age: 25
};
let createArray = function (length, value) {
    return new Array(length).fill(value);
};
console.log(createArray(3, { msg: 'hello world' }));
