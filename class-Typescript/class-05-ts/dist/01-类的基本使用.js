"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*       类（Class）
*
* */
class Person {
    // 类的属性
    name;
    age;
    // 构造函数
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 类的方法
    introduce() {
        console.log(`大家好，我叫${this.name},今年${this.age}岁`);
    }
}
// 类的实例化
const people1 = new Person('旺仔', 1);
people1.introduce();
