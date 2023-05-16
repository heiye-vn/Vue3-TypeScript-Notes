"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let myArray = ["hello", "world"];
console.log(myArray.length);
let myTuple = ["hello", 123, false];
console.log(myTuple);
// 定义学生集合
let students = [
    { name: "小敏", studentNum: 16310120815, age: 18, className: "高二8班" },
    { name: "小明", studentNum: 16310120711, age: 20, className: "高二7班" },
    { name: "小敏", studentNum: 16310120718, age: 19, className: "高二7班" }
];
console.log(students);
let c = { name: 'BYD', color: 'white', price: 150000, type: 'autoalarm' };
console.log(c);
class Dog {
    name = '大黄';
    color = 'yellow';
    action() {
        console.log('sing...');
    }
    yelp() {
        console.log('yelp...');
    }
}
let dog = new Dog();
dog.action();
dog.yelp();
