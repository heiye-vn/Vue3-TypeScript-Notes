export default {};

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

abstract class Person {
    abstract _name: string;

    sayHi(): void {
        console.log(`Hello, my name is ${this.name}`);
    }

    get name(): string {
        return this._name;
    }

    set name(val: string) {
        this._name = val;
    }
}

class Student extends Person {
    _name: string;

    constructor(name: string) {
        super();
        this._name = name;
    }
}

let p = new Student("Jack");
// p._name = '李四'
// p.sayHi();


abstract class Animal {
    animalName: string;
    skinColor: string;

    constructor(name: string, color: string) {
        this.animalName = name;
        this.skinColor = color;
    }

    abstract yelp(): void;  // 定义抽象方法

    move(): void {
        console.log("moving...");
    }
}

class Dog extends Animal {
    yelp(): void {
        console.log("yelp...");
    }
}

let dog: Animal;    // 允许创建一个对抽象类的引用
dog = new Dog("大黄", 'yellow');
// console.log(dog)
// dog.yelp();
// dog.move();


abstract class Shape {
    abstract shape_name: string;

    abstract calArea(): number;

    desShape(): string{
        return `This is ${this.shape_name}`;
    }
}

class Rectangle extends Shape {
    shape_name: string;
    shape_width: number = 20;
    shape_height: number = 20;

    constructor(name: string, width: number, height: number) {
        super();
        this.shape_name = name;
        this.shape_width = width;
        this.shape_height = height;
    }

    calArea(): number {
        return this.shape_width * this.shape_height;
    }

    desShape(): string{
        return `这是一个${this.shape_name}, 面积为${this.calArea()} `
    }
}
let rectangle = new Rectangle('矩形', 30, 30);
console.log(rectangle.desShape());


// 通过层级继承实现多继承
abstract class GrandFather {
    abstract money: string;
}

abstract class Father extends GrandFather {
    money: string = '￥100,0000';

    abstract house: string;
}

class Child extends Father {
    house: string = '4幢';
}





