"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let numVal = 10;
let val = 'hello';
val = 144;
let tupleVal = [10, 'haha', false, { name: '张三' }];
let objVal = { name: '张三', age: 30 };
const personArr = [
    { name: '张三', age: 17, likes: ['haha', 'xix', 'heihei'] },
    { name: '李四', age: 38, likes: ['haha', 'xixi', 'heihei'] },
    { name: '王五', age: 23, likes: ['haha', 'xixi', 'heihei'] },
    { name: '', age: 23, likes: ['haha', 'xixi', 'heihei'] },
];
const nameList = personArr.map(({ name }) => name).filter(Boolean);
let car = { name: 'Audi', model: 'suv', color: 'white', price: 350000 };
console.log(car);
