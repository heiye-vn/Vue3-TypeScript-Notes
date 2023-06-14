"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*       泛型约束：
*           在函数内部使用泛型变量时，由于泛型过于灵活，不清楚该变量是哪种类型，因此不能随意操作某些内置属性或方法；
*
*           让泛型继承(extends)定义的类型(type)或接口(interface)，从而实现泛型约束
*
*       注：在 TypeScript 中，如果两个对象的类型不一样，即使它们的属性和名称类型相同，也不能直接进行对象间的赋值操作，需要使用类型断言
*/
function getLength(arr) {
    // Property 'length' does not exist on type 'T'
    // console.log(arr.length)
    return arr;
}
getLength('hello');
function getLength1(param) {
    console.log(param);
    return param.length;
}
// let len = getLength1('hello world');
// let len = getLength1(666);       // Argument of type 'number' is not assignable to parameter of type 'ILength'
let len = getLength1([1, 2, 3, 'apple', true]);
console.log(len);
// 多个类型之间相互约束
function copyFields(target, source) {
    for (let id in source) {
        // 类型断言：source as T
        // target[id] = (source as T)[id];
        target[id] = source[id];
    }
    return target;
}
let x = { a: 1, b: 2, c: 3, d: 4 };
let result = copyFields(x, { b: 10, d: 20 });
console.log(result);
// interface Source {
//     name: string;
//     age: number;
// }
//
// interface Target extends Source {
//     address: string;
// }
//
// function copyFields(target: Target, source: Source): Target{
//     for(let propName in source){
//         target[propName] = source[propName];
//     }
//     return target
// }
//
// const target: Target = { name: 'Bob', age: 30, address: 'Shanghai'};
// const source: Source = { name: 'Alice', age: 20};
//
// console.log( copyFields(target, source) );
