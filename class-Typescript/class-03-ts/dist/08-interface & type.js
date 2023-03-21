"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let selfIntroduce;
selfIntroduce = (...args) => {
    return `${args[0]}, ${args[1]}`;
};
let selfIntroduce_ = (arg1, arg2) => {
    return `${arg1}-----${arg2}`;
};
let myPicture = {
    color: 'green',
    imgSrc: 'https://www.baidu.com/img/01.jpg',
    width: 200,
    height: 200
};
let myPicture_ = {
    width: 100,
    height: 100,
    color: 'red',
    imgSrc: 'http://zsp.gold/image/basic/02.png'
};
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
let person = {
    name: '娃哈哈',
    age: 999
};
let otherObj = {
    name: '麻子',
    age: 35
};
