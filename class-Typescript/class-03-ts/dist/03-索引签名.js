"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let ironMan = { name: "Tony Stark", age: 40, gender: "male", nickname: "Iron Man" };
// console.log(ironMan);
/* 场景：定义了用来描述人(对象)的接口，在该对象上新增未知属性 */
// let spiderMan1: Person = { name:'Peter Parker', age: 20, gender:'male', nickname:'Spider Man', address:'San Francisco' }     // error：'address' does not exist in type 'Person'
// 方法1：使用变量(ts编译检查层级较浅，无法做到更深层次的类型校验，改方法在编译时规避了类型检查，故不推荐)
let info = { name: "Peter Parker", age: 20, gender: "male", nickname: "Spider Man", address: "San Francisco", job: "protect the people" };
let spiderMan2 = info;
// console.log(spiderMan2);
// 方法2：使用类型断言
let spiderMan3 = { name: "Peter Parker", age: 20, gender: "male", nickname: "Spider Man", address: "San Francisco", money: 3000000 };
let cat = { name: "大橘", color: "orange", age: "three years old" };
const test = { name: "张三", 111: "哈哈哈", age: 30 }; // { '111': '哈哈哈', name: '张三', age: 30 }
// console.log(test, "----------test");
// console.log(test.name);
// console.log(test['name']);
// console.log(test["111"]);
// console.log(test[111]);
class Foo {
    msg;
    constructor(msg) {
        this.msg = msg;
    }
    log() {
        console.log(this.msg);
    }
}
let foo = {};
foo['hello'] = new Foo('World');
const strArray = ['火女', '火男', '男刀', '女刀'];
