export default {};

/*
*       泛型类
*           在定义类时，为类中的属性或方法定义泛型类型，在创建类的实例时，在指定特定的泛型类型
* */

class Person<T, U> {
    name: T;
    age: U;
    job: T;

    constructor(name: T, age: U, job: T) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

const p1 = new Person('狄仁杰', 20, 'adc');
console.log(p1);

const p2 = new Person<string, number>('韩信', 42, 'jungle');
console.log(p2);

const p3: Person<string, number> = new Person('廉颇', 60, 'sup');
console.log(p3);