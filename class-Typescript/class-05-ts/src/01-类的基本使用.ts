export default {};

/*
*       类（Class）
*
* */

class Person {
    // 类的属性
    name: string;
    age: number;

    // 构造函数
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // 类的方法
    introduce(): void{
        console.log(`大家好，我叫${this.name},今年${this.age}岁`);
    }
}

// 类的实例化
const people1 = new Person('旺仔', 1)
people1.introduce()
