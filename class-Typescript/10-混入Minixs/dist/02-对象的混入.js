"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
var ObjectMinix;
(function (ObjectMinix) {
    // 对象的混入其实就是利用 es6 中的方法：Object.assign()
    let nameObj = { name: "石昊" };
    let ageObj = { age: 15 };
    let favoriteObj = { favorites: ["fight", "eat"] };
    let person = Object.assign(nameObj, ageObj, favoriteObj);
    console.log(person);
})(ObjectMinix || (ObjectMinix = {}));
