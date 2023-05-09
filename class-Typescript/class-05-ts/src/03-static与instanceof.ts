export default {};

/*
*       static：用于声明静态属性或静态方法，它们属于类而不属于类的实例，可以通过 类名.xxx 访问，不需要实例化
*               构造函数不能通过 static 修饰的，也不能使用构造函数对静态属性进行赋值
*               不能使用 static 声明 name 属性，因为类中有个内置的 name 属性，为当前类名(ClassName || Function.name)
*
*       instanceof：用于检查一个实例是否属于某个类，返回一个布尔值
* */

class StaticTest {
    // 静态属性
    static salary: string = '10k';
    name: string;

    // Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'StaticTest'
    // static name: string = '张三';

    // 非静态属性
    job: string;

    constructor(name: string= '狗蛋',job: string) {
        this.name = name;
        this.job = job;
    }

    static idea(): void{
        // console.log('我的期望薪资是：' + this.salary);
        console.log('我的期望薪资是：' + StaticTest.salary + ' ====>静态方法');
    }

    say(): void {
        console.log(`我叫${this.name},我的工作是：${this.job} ===>非静态方法`);
    }
}

const person: StaticTest = new StaticTest('小明','Front-end engineer');
person.say();

/*
    let staticTest = new StaticTest();
    staticTest.salary = '18k';
    staticTest.idea()
*/

StaticTest.salary = '18k';
StaticTest.idea();
console.log(StaticTest.name);   // StaticTest


class Animal {}
class Cat extends Animal {};

let tom = new Cat();
let jerry = new Animal();
// console.log( tom instanceof Animal);
// console.log( tom instanceof Cat);
// console.log( tom instanceof Object);

// console.log( jerry instanceof Object);
// console.log( jerry instanceof Animal);
// console.log( jerry instanceof Cat);     // false
