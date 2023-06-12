export default {};

/*
*       接口（interface）
*           在面向对象语言中，接口是是一个非常重要的概念。
*           接口是对象的状态（属性）和行为（方法）的抽象（描述），接口的作用对一些类型进行约束。
*
*           语法
*               interface interface_name {}, 里面的成员以 ';' 结尾
* */

// 需求：创建一个学生的对象，需要对该对象的属性进行一定的约束

interface IStudent {
    id: number;
    name: string;
    age: number;
    sex: string;
    class: string;
}

let student1: IStudent = {
    id: 11032145,
    name: '小明',
    age: 18,
    sex: '男',
    class: '高二一班',
    // 无法添加接口中不存在的属性或方法（接口对类型的约束）
    // nikeName:'小胖子'  // 'nikeName' does not exist in type 'IStudent'
}
// console.log(student1);

function introduce(person: IStudent): void {
    console.log(`My name is ${person.name}，今年${person.age}岁`)
}
introduce(student1);

interface IDog {
    name: string;
    yelp(): void;
}

const dog: IDog = {
    name:'大黄',
    yelp() {
        console.log(this.name)
    }
}
dog.yelp()
