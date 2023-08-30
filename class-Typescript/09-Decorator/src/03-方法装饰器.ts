/*
*       方法装饰器（MethodDecorator）：对方法进行修饰，方法装饰器不能用于声明文件(.d.ts)、重载或其他上下文环境(如declare类中)
*
*       方法装饰器(MethodDecorator)函数接受三个参数：
*           - target：对静态成员来说是类的构造函数，对实例成员是类的原型对象
*           - propertyKey：成员名字，固定为 string 类型
*           - descriptor：成员的属性描述符
*
*       descriptor 中的属性包括：
*           - value：被装饰成员的原始值（例如：一个方法的函数体）
*           - writable：boolean类型，表示成员是否可写
*           - enumerable：boolean类型，表示成员是否可枚举（能否在对象可遍历属性中存在）
*           - configurable：boolean类型，表示成员是否可配置（是否可以使用 delete 操作符删除成员 ）
*           - get：如果成员是一个访问器属性（getter），则为该属性的获取方法
*           - set：如果成员时一个访问器属性（setter），则为该属性的设置方法
* */

namespace methodDecorator {
    function notEnumerable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = false;
    }

    class Person {
        name: string;
        age: number;
        gender: string;

        constructor(name: string, age: number, gender: string) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        @notEnumerable
        sayHi(): string {
            return `Hello, my name is ${this.name}`;
        }
    }

    const person: Person = new Person("Rose", 20, "女");

    for (const personKey in person) {
        // console.log(personKey, "---", person[personKey]);
    }


    function log(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originMethod = descriptor.value;
        // 重写被装饰的方法
        descriptor.value = function(...args: any[]){
            console.log(`Calling ${propertyKey} width arguments: ${args} `)
            const result = originMethod.apply(this, args);
            console.log(`Method ${propertyKey} returned: ${result}`)
            return result
        }
    }

    class ExampleClass {
        @log
        greet(name: string, address: string){
            return `你好, 我是${name},来自${address}`
        }
    }

    const p = new ExampleClass()
    p.greet('清漪', '补天教')
}
