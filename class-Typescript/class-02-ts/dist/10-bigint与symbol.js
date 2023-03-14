"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// bigint：用于表示一个很大的整数
let oneHundred = BigInt(100);
console.log(oneHundred);
let oneHundred_ = 100n;
console.log(oneHundred_);
// symbol：创建全局唯一引用
const firstName = Symbol('name');
const lastName = Symbol('name');
console.log(firstName);
console.log(lastName);
if (firstName === lastName) {
    console.log('ok');
}
