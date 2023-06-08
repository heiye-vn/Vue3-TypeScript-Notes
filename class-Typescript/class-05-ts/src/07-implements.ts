export default {};

/*
*       实现（implements）
*           implements 用于表示一个类需要实现接口的所有成员（属性、方法）
*
*           一个类只能继承一个父类(基类)，一个类可以实现多个接口
*
*           当类在实现接口时，必须全部实现接口中的成员（属性、方法），否则会编译错误，如果接口中的成员时可选的，那么不需要一定实现
*
*           一个接口可以继承多个接口
*
*           接口和接口之间，类型和类型之间，用 extends
*
*           类和接口之间使用 implements
*/

interface MyArray {
    [index: number]: string;

    length: number;
}

let myArray: MyArray = ["hello", "world"];
console.log(myArray.length);

interface MyTuple {
    0: string;
    1: number;
    2: boolean;
}

let myTuple: MyTuple = ["hello", 123, false];
console.log(myTuple);

interface Student {
    name: string;
    studentNum: number;
    age: number;
    className: string;
}

// 定义学生集合
let students: Array<Student> = [
    {name: "小敏", studentNum: 16310120815, age: 18, className: "高二8班"},
    {name: "小明", studentNum: 16310120711, age: 20, className: "高二7班"},
    {name: "小敏", studentNum: 16310120718, age: 19, className: "高二7班"}
];
console.log(students);


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

let c: Car = {name: "BYD", color: "white", price: 150000, type: "autoalarm"};
console.log(c);


interface Animal {
    name: string;
    foodsType?: string;

    yelp(): void;
}

interface Sing {
    action(): void;
}

class Dog implements Animal, Sing {
    name: string = "大黄";
    foodsType: string = "meat";
    color: string = "yellow";

    constructor(food: string) {
        this.foodsType = food;
    }

    action(): void {
        console.log("sing...");
    }

    yelp(): void {
        console.log("yelp...");
    }
}

let dog = new Dog('rice');
dog.name = '小黑';
console.log(dog);
dog.action();
dog.yelp();
