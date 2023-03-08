"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*       类型断言
*           类型断言（Type Assertion）可以用来手动指定一个值的类型，允许覆盖原本的推断，并且能以任何想要的方式分析它
*           通俗来说就是告诉编译器我把当前参数断言(判定)为我需要的某个类型然后进行下一步操作
*       语法：
*           方式一：<类型>值
*           方式二：值 as 类型（tsx中只能使用该方式），为避免错误，推荐统一使用该方式
*
*       注意：类型断言不是类型转换，把一个类型断言成联合类型中不存在的类型会报错
*/
let num = 999;
// let foo = <Foo>{};
let foo = {};
foo.bar = "bar";
foo.age = 10;
// 定义获取字符长度的方法
function getLength(val) {
    // if(typeof val === 'number'){
    //     return val.toString().length;
    // }else{
    //     return val.length;
    // }
    // 使用类型断言
    let len;
    len = val.length ? val.length : val.toString().length;
    return len;
}
function getName(animal) {
    // animal.run()
    return animal.name;
}
let catObj = {
    name: '汤圆',
    run() {
        console.log('cat');
    }
};
// console.log(getName(catObj));
function isFish(animal) {
    // animal = animal as Fish;
    return typeof animal.swim === 'function';
}
// console.log(isFish({
//     name: "煤球", run() {
//     }
// }));        // false
// console.log(isFish({
//     name: "花花", swim() {
//     }
// }));        // true
function swim(animal) {
    // (animal as Fish).swim()
    if (animal.swim) {
        animal.swim();
    }
    else {
        animal.run();
    }
}
let tom = {
    name: '汤姆',
    run() { console.log('run'); }
};
// swim(tom);
let jim = {
    name: '吉米',
    swim() {
        console.log("swim");
    }
};
// swim(jim)
// 二、将一个父类断言为更加具体的子类
class ApiError extends Error {
    code = 0;
}
class HttpError extends Error {
    statusCode = 200;
}
// 参数类型是 Error 类, 该类型没有code属性，所以断言为子类型ApiError
function isApiError(error) {
    return typeof error.code === 'number';
}
// 使用instanceof 判断参数是否是某个类的实例（只有是真正的类才能可以，接口则不行）
function isHttpError(error) {
    return error instanceof HttpError;
}
function isOtherError(error) {
    return typeof error.otherCode === 'number';
}
let apiError = { message: "", name: "", code: 0 };
let httpError = { message: "", name: "", statusCode: 200 };
let otherError = { message: "", name: "", otherCode: 500 };
// console.log(isOtherError(apiError),'API');     // false
// console.log(isOtherError(httpError),'HTTP');     // false
// console.log(isOtherError(otherError),'OTHER');     // true
// 将任何一个类型断言为 any  注：它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any
const num_01 = 100;
// num_01.length = 1   // Property 'length' does not exist on type 'number'
// window.foo = 1;     // Property 'foo' does not exist on type 'Window & typeof globalThis'
// (window as any).foo = 1;    // ok
// 将 any 断言为一个具体的类型
// function getCacheData(key: string): any{
//     return (window as any).cache[key]
// }
// getCacheData 的返回值是 any，再调用时断言为一个确认的类型
// interface Mouse {
//     number: string
//     run(): void
// }
// const jerry = getCacheData('tom') as Mouse;
// jerry.run()
// 双重断言
function handler(event) {
    const element = event; // ok
    // const el = event as HTMLElement     // Error: 'Event' 和 'HTMLElement' 中的任何一个都不能赋值给另外一个
    // 使用双重断言
    // const el = (event as unknown) as HTMLElement;
    // const el_ = event as any as string;
}
const childPerson = {
    name: '小明',
    sayHi: () => {
        console.log('hello');
    }
};
const parent = childPerson;
console.log(parent, '---------parent');
const parentPerson = {
    name: '张三'
};
// const child: Child = parentPerson
function testParent(person) {
    console.log(person.sayHi); // undefined
    return person;
}
testParent(parentPerson);
function testChild(person) {
    console.log(person.name); // 小明
}
testChild(childPerson);
const testStr = 'hello';
const testNum = 266;
// let val = testStr as number;    // Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other
function tesFoo(value) {
    console.log(value.toFixed(2));
}
let count;
initialize();
console.log(count * 12);
function initialize() {
    count = 10;
}
