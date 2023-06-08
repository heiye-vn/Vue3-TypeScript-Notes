## Typescript中接口和抽象类的区别

   *前言：在看了ts中抽象类和接口的相关知识点之后，感觉他们的用法很像，首先二者都是抽象的定义(个人理解为都是定义了一个”模具“，然后根据这个”模具“去构造可用的实体)，需要去实体化，但是相比接口来说，抽象类又不完全是抽象定义的，可以存在实体成员。下面从它们的概念，语法，特性去分析二者的区别。*

------

### 1.抽象类

   `抽象类（Abstract Class）` 是类的一种；抽象类是供其他类继承的基类，不允许被实例化。抽象类中的抽象成员必须在子类中被实现。

   栗子-抽象类的使用：

```typescript
// 定义抽象类
abstract class Shape {
    abstract shape_name: string;    // 抽象属性

    abstract calArea(): number;     // 抽象方法

    desShape(): string{             // 实体方法
        return `This is ${this.shape_name}`;
    }
}

class Rectangle extends Shape {
    shape_name: string;         // 实现抽象属性
    shape_width: number = 20;
    shape_height: number = 20;

    constructor(name: string, width: number, height: number) {
        super();
        this.shape_name = name;
        this.shape_width = width;
        this.shape_height = height;
    }

    // 实现抽象方法
    calArea(): number {
        return this.shape_width * this.shape_height;
    }

    // 重写基类的方法
    desShape(): string{
        return `这是一个${this.shape_name}, 面积为${this.calArea()} `
    }
}
let rectangle: Rectangle | Shape;
rectangle = new Rectangle('矩形', 30, 30);
rectangle.desShape();   // 这是一个矩形, 面积为900 
```

抽象类的特性：

- 使用 `abstract` 关键字定义抽象类及成员（属性、方法），换句话说，使用 abstract 定义的类即为抽象类(不管是否存在抽象成员)；
- 抽象属性和抽象方法只有在抽象类中才存在，不能在普通实体类中使用 abstract 来定义抽象成员；
- 含有声明但未实现的方法（也可以包含已实现的方法），抽象属性不能初始化，抽象类更是无法被实例化；
- 在抽象类中可以定义存取器(getter/setter)；
- 派生类必须实现抽象类(基类)中所有的抽象成员，否则会编译错误；
- 实例对象在声明时可以使用抽象类作为变量的引用(类型)；
- 抽象类只支持单继承。

对于最后一点：类只能继承自一个父类(超类 | 基类)，但是可以实现多层继承。

```typescript
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
```

以上就是对抽象类的一个了解，下面再对接口做下概述。

### 2.接口

   `接口（interface）`是对对象的状态（属性）和行为（方法）的描述（抽象），也可以叫做对类型的一种约束（类也是一种类型）。

   栗子-接口的一些使用场景：

```typescript
// 约束数组类型、元组类型和长度
interface MyArray {
    [index: number]: string;
    length: string;
}
let myArray: MyArray = ['hello', 'world'];
console.log(myArray.length);    // 2

interface MyTuple {
    0: string;
    1: number;
    2: boolean;
}
let myTuple: MyTuple = ['hello', 233, true];

// 约束对象成员(字段)
interface Student {
    name: string;
    studentNum: number;
    age: number;
    className: string;
}
// 定义学生集合
let students: Array<Student> = [
    { name:"小敏", studentNum:16310120815, age: 18, className:'高二8班' },
    { name:"小明", studentNum:16310120711, age: 20, className:'高二7班' },
    { name:"小敏", studentNum:16310120718, age: 19, className:'高二7班' }
];

// 接口的继承
interface Alarm {
    type: string;
}
interface Arguments {
    color: string;
    price: number;
}
interface Car extends Alarm, Arguments {
    name: string;
}
let c: Car = { name:'BYD', color:'white', price:150000, type:'autoalarm' };


// 类实现接口
interface Animal {
    name: string;
    yelp(): void;
}
interface Sing {
    action(): void;
}
class Dog implements Animal, Sing {
    name: string = '大黄';
    color: string = 'yellow';
    action(): void {
        console.log('sing...')
    }

    yelp(): void {
        console.log('yelp...')
    }
}
let dog = new Dog();
dog.action();
dog.yelp();
```

接口的特性：

- 不可以被实例化
- 含有声明但未实现的方法
- 一个类可以实现多个接口，接口支持多继承
- 接口中定义的成员必须要实现
- 接口中所有成员都是默认为public的

### 3.区别总结

相同点：接口和抽象类都表示的是抽象的东西，不能被实例化(new)，有相同的属性修饰符 `readOnly`；

不同点：
   - 接口使用 `interface` 关键字声明，抽象类使用 `abstract` 声明（类和成员）；
   - 接口中只有 `readOnly` 修饰符，抽象类中有 `public、private、protected、readOnly` 修饰符；
   - 接口可以支持多继承；类只支持单继承；
   - 接口中的成员都是抽象的，而抽象类中的成员并不一定，只有使用 `abstract` 声明的才是；
   - 在扩展性方面，接口相对比较固定，只能通过增加新的接口来扩展；而抽象类可以在子类中对抽象类中不存在的属性或方法进行扩展；
   - 接口是完全不关心方法的如何实现，而抽象类的某个抽象方法可以根据不同的派生类实现不同的功能。
