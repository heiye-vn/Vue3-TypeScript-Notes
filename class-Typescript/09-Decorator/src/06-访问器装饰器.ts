/*
*       访问器装饰器：参数装饰器作用于访问器（getter/setter）上，不可用于声明文件（.d.ts），
*       重载或其他上下文环境（declare类）
*
*       访问器装饰器()函数接受三个参数：
*           - target：对静态成员来说是类的构造函数，对实例成员是类的原型对象
*           - propertyKey：成员名字，固定为 string 类型
*           - descriptor：成员的属性描述符
* */


namespace getsetDecorator {
    function getsetLog(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    }

    class Person {
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        // TypeScript不允许同时装饰一个成员的get和set访问器，否则会报错
        @getsetLog
        get() {
            return this._name;
        }
        // @getsetLog
        set(newName: string) {
            this._name = newName;
        }
    }

    const person: Person = new Person("石昊", 18);
}
