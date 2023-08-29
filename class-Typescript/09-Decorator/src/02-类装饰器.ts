/*
*       类装饰器
*           作用于声明的类上，用来监视、修改或替换类定义
*           类装饰器的参数有且只有一个，即 target（类的构造器函数）
* */

namespace classDecorator {
    function sealed(target: any) {
        // console.log(target)
        // console.log(target.prototype)
    }

    @sealed
    class BugReport {
        type = 'report';
        title: string;

        constructor(t: string) {
            this.title = t;
        }
    }

    const addSex: ClassDecorator = (target: any) => {
        target.prototype.sex = '男'
    }

    @addSex
    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    interface P {
        name: string
        age: number
        sex?: string
    }

    const  person: P = new Person('李四', 20)
    console.log(person.sex)

    // 使用装饰器工厂添加属性， 返回一个类装饰器类型的函数
    const addSex_ = (value: string): ClassDecorator => {
        return (target: any) => {
            console.log(target);
            target.prototype.sex = value
        }
    }

    @addSex_('女')
    class Person_ {

    }

    interface P_ {
        sex?: string
    }

    const person_: P_ = new Person_();
    console.log(person_.sex)
}