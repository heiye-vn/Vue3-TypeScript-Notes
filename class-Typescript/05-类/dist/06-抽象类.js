"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*       抽象类（ abstract ）
*           TS中的类、方法、字段可能是抽象的；抽象方法和抽象字段是尚未提供实现的方法。
*       这些成员必须存在在抽象类中，不能直接被实例化。
*
*           抽象类的作用是作为实现所有抽象成员的子类(派生类)的基类。
*
*           派生类必须实现抽象类中的所有成员，如果有任何一个没有被实现，就需要声明该派生类也是一个抽象类，否则会报错，也无法被实例化
*
*           抽象类中的成员和实体类一样包含普通变量和方法，一个抽象类至少有一个抽象方法，一个非抽象派生类必须实现这个抽象方法才能被实例化
*
*           抽象方法不能有方法体( {} )，抽象属性不能赋初始值，抽象类可以添加存取器(getter/setter)
*
*           实例对象在声明时允许抽象类作为变量的类型
*
*/
class Person {
    sayHi() {
        console.log(`Hello, my name is ${this.name}`);
    }
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
}
class Student extends Person {
    _name;
    constructor(name) {
        super();
        this._name = name;
    }
}
let p = new Student("Jack");
// p._name = '李四'
// p.sayHi();
class Animal {
    animalName;
    skinColor;
    constructor(name, color) {
        this.animalName = name;
        this.skinColor = color;
    }
    move() {
        console.log("moving...");
    }
}
class Dog extends Animal {
    yelp() {
        console.log("yelp...");
    }
}
let dog; // 允许创建一个对抽象类的引用
dog = new Dog("大黄", 'yellow');
// console.log(dog)
// dog.yelp();
// dog.move();
class Shape {
    desShape() {
        return `This is ${this.shape_name}`;
    }
}
class Rectangle extends Shape {
    shape_name;
    shape_width = 20;
    shape_height = 20;
    constructor(name, width, height) {
        super();
        this.shape_name = name;
        this.shape_width = width;
        this.shape_height = height;
    }
    calArea() {
        return this.shape_width * this.shape_height;
    }
    desShape() {
        return `这是一个${this.shape_name}, 面积为${this.calArea()} `;
    }
}
let rectangle = new Rectangle('矩形', 30, 30);
console.log(rectangle.desShape());
// 通过层级继承实现多继承
class GrandFather {
}
class Father extends GrandFather {
    money = '￥100,0000';
}
class Child extends Father {
    house = '4幢';
}
