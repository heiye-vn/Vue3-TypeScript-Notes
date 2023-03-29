"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*       类（Class）
*
*       类的相关概念
*           - 类(Class): 定义了一件事物的抽象特点，包含属性和方法;
*           - 对象(Object): 类的实例，通过 new 关键字生成;
*           - 面向对象(OOP)的三大特性: 继承、封装、多态;
*           - 继承(Inheritance): 子类继承父类，子类除了拥有父类的所有特性外，还有一些自己的更具体的特性;
*           - 封装(Encapsulation): 将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
*           - 多态(Polymorphism): 由继承产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Fish 继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，无需了解它是 Cat 还是                                 Fish，就可以直接调用 eat 方法，程序会自动判断出来该如何执行 eat 方法;
*           - 存取器(setter & getter): 用于对象属性的读取和赋值;
*           - 修饰符(Modifier): 修饰符是一个关键字，用于限定成员或类型的特性，如 public(公有属性或方法)、private(私有属性或方法);
*           - 抽象类(Abstract Class): 抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现;
*           - 接口(Interface): 不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现(Implement)。一个类只能继承自另一个类，但是可以实现多个接口
* */
// 类的属性和方法
class Person {
    // 类的属性
    name;
    age;
    // 构造函数(构造方法)
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 类的方法(一般方法)
    introduce() {
        console.log(`大家好，我叫${this.name},今年${this.age}岁`);
    }
}
// 创建类的实例
const people1 = new Person('旺仔', 1);
// 调用实例方法
people1.introduce();
