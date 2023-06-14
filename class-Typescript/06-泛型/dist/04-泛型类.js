"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*       泛型类
*           在定义类时，为类中的属性或方法定义泛型类型，在创建类的实例时，在指定特定的泛型类型
* */
class Person {
    name;
    age;
    job;
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}
const p1 = new Person('狄仁杰', 20, 'adc');
console.log(p1);
const p2 = new Person('韩信', 42, 'jungle');
console.log(p2);
const p3 = new Person('廉颇', 60, 'sup');
console.log(p3);
