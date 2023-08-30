/*
*       参数装饰器（ParameterDecorator）：参数装饰器作用于构造函数或方法的参数声明上，不可用于声明文件（.d.ts），
*       重载或其他上下文环境（declare类）
*
*       参数装饰器(ParameterDecorator)函数接受三个参数：
*           - target：对静态成员来说是类的构造函数，对实例成员是类的原型对象
*           - propertyKey：成员名字，固定为 string 类型
*           - paramIndex：函数参数列表中参数索引
* */

namespace parameterDecorator {
    const paramLog = (target: any, propertyKey: string, paramIndex: number) => {
        console.log(target);
        console.log(propertyKey);
        console.log(paramIndex);
    }

    class Person {
        name: string;
        age: number;

        constructor(@paramLog name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        setAttr(newName: string, @paramLog newAge: number){
            this.name = newName;
            this.age = newAge;
        }
    }

    const  person: Person = new Person('石昊', 18)
    person.setAttr('秦昊', 10);
    console.log(person);
}
