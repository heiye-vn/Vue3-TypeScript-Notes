"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let person_fun = (name, age) => {
    console.log(name);
    console.log(age);
};
let person_fun2 = (person, job) => {
    return `My name is ${person.name}，${person.age} years old，job is ${job}`;
};
const personIntroduce = person_fun2({ name: "Bod", age: 30 }, "doctor");
let person_fun3 = (name, age, sex, likes) => {
    console.log(name);
    console.log(age);
    console.log(sex);
    console.log(likes);
};
// 函数中使用结构赋值将形参 name 名称更改为 Iname，即：{name: Iname, age} <===> {name:xxx, age:xxx}
let func = ({ name: Iname, age }) => {
    console.log(`${Iname},${age}`);
};
func({ name: 'Boolean', age: 50 });
// 上述函数不用接口实现的话
let func_ = ({ name: nickName, age }) => {
    console.log(`${nickName}, ${age}`);
};
func_({ name: '李四', age: 30 });
/*
*       总结：
*           接口的好处在于可复用及可扩展性
*           上面例子中的 Actual_1 约束了函数的参数，还可以约束具备相同属性的对象。Person3 也可以约束很多相同功能的函数
* */
