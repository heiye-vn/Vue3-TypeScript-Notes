export default {};

/*
*       类的继承
*           1. 类和类之间如果有继承关系，需要使用 extends 关键字
*           2. 子类中可以调用父类的构造函数，使用 super 关键字(包括调用父类中的实例方法，也是使用 super)
*           3， 子类可以重写父类的方法
* */

// 父类（基类 | 超类）
class Animal {
    public name: string;
    private age: number;

    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }

    sayHi(): string {
        return `My name is ${this.name}`;
    }
}

let mouse = new Animal("Jerry", 2);
mouse.sayHi();

// 子类（派生类）
class Cat extends Animal {
    constructor(name: string) {
        super(name);    // 调用父类的 constructor(name)
        super.name = 'Tom666';
        console.log(this.name);     // Tom666
        // console.log(super.name);    // undefined
    }

    sayHi(): string {
        return `Hello, ${super.sayHi()}`;   // 调用父类的 sayHi()
    }
}

let cat = new Cat("Tom");
cat.sayHi();


class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Teacher extends Person {

}
