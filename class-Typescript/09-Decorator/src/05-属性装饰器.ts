/*
*       属性装饰器（PropertyDecorator）：参数装饰器作用于类属性上，不可用于声明文件（.d.ts），
*       重载或其他上下文环境（declare类）
*
*       属性装饰器(PropertyDecorator)函数接受两个参数：
*           - target：对静态成员来说是类的构造函数，对实例成员是类的原型对象
*           - propertyKey：成员名字，固定为 string 类型
* */


namespace propertyDecorator {
    function propLog(target: any, propertyKey: string){
        console.log(target);
        console.log(propertyKey);
    }

    class Person {
        @propLog
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    const  person: Person = new Person('石昊', 18)
}
