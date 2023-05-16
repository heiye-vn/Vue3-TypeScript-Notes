export default {};

/*
*       类的修饰符
*           public：默认值，公共的，任何位置都能访问类中的成员（属性，方法）
*
*           private：私有的，只有在类的内部访问，实例对象或者子类（派生类）中均无法访问
*
*           protected：只能在类的内部和子类中访问，实例对象中无法访问
*
*           readOnly：将属性设置为只读的。只读属性必须在声明时或者构造函数中初始化
*/

class Animal1 {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public sayHi(): void {
        console.log("hello");
    }
}

let a = new Animal1("Tom");
// console.log(a.name)
// a.sayHi()

class Animal2 {
    private name: string;

    // 构造函数被 private 修饰后，该构造函数是私有的，该类不能被实例化和继承(扩展)
    // private constructor(name: string) {
    //     this.name = name;
    // }
    constructor(name: string) {
        this.name = name;
    }

    private getName(): string {
        return this.name;
    }

    sayHi(): void{
        console.log(`hello, my name is ${this.getName()}`)
    }
}

let b = new Animal2("Jack");
// b.sayHi();
// Property 'name' is private and only accessible within class 'Animal2
// console.log(b.name)

class Animal3 {
    protected name: string;

    // 构造函数被 protected 修饰后，该构造函数是受保护的，该类只能被其子类继承，不能实例化
    // protected constructor(name: string) {
    //     this.name = name;
    // }
    constructor(name: string) {
        this.name = name;
    }

    protected getName(): string {
        return this.name;
    }
}

class Cat extends Animal3 {
    constructor(name) {
        super(name);
    }

    sayHi(): void {
        console.log(`大家好，我叫${super.getName()}-----通过super调用父类的方法`)
        console.log(`大家好，我叫${this.name}------直接访问name属性`)
    }
}

let c = new Animal3("Jerry");
// Property 'name' is protected and only accessible within class 'Animal3' and its subclasses
// console.log(c.name)

// let cat = new Cat('杰瑞');
// cat.sayHi();

class Animal4 {
    readonly name: string = '小胡';
    readonly age: number;
    readonly gender: string;

    constructor( age: number, gender: string) {
        this.age = age;
        this.gender = gender;
    }
}

let d = new Animal4(20, '男');
// console.log(d)


