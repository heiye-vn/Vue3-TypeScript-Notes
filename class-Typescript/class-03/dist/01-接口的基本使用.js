"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let student1 = {
    id: 11032145,
    name: '小明',
    age: 18,
    sex: '男',
    class: '高二一班',
    // 无法添加接口中不存在的属性或方法（接口对类型的约束）
    // nikeName:'小胖子'  // 'nikeName' does not exist in type 'IStudent'
};
// console.log(student1);
function introduce(person) {
    console.log(`My name is ${person.name}，今年${person.age}岁`);
}
introduce(student1);
const dog = {
    name: '大黄',
    yelp() {
        console.log(this.name);
    }
};
dog.yelp();
