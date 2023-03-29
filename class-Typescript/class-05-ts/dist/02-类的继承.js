"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*       类的继承
* */
// 父类（基类 | 超类）
class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}
let mouse = new Animal("Jerry", 2);
mouse.sayHi();
// 子类（派生类）
class Cat extends Animal {
    constructor(name) {
        super(name); // 调用父类的 constructor(name)
        super.name = 'Tom666';
        console.log(this.name); // Tom666
        // console.log(super.name);    // undefined
    }
    sayHi() {
        return `Hello, ${super.sayHi()}`; // 调用父类的 sayHi()
    }
}
let cat = new Cat("Tom");
cat.sayHi();
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Teacher extends Person {
}
