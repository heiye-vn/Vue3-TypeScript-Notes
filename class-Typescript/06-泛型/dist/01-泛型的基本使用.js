"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*       泛型的定义：
*           - 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性;
*           - 泛型可以理解为宽泛的类型、通常用于类和函数，在使用的时候再定义类型；
*           - 泛型不仅可以让我们的代码变得更加健壮，还能让我们的代码保持灵活性和可复用性；
*           - 泛型通过使用 <T> 来表示，放在参数的前面；
*           - any 是一种特殊的泛型；
*
*       常见泛型变量的定义词：
*           - T（Type）；
*           - U（Unit）；
*           - K（Key）：表示对象中的键类型；
*           - V（value）：表示对象中的值类型；
*           - E（element）：表示元素类型；
*/
// 不使用泛型
// function createArray(items: number, value: string ): string[]{
//     return new Array(items).fill(value);
// }
// 参数类型受限（定死的）
// let arr = createArray(3, 'phone');
function createArray(items, value) {
    return new Array(items).fill(value);
}
// 使用 any 类型看似解决了类型检查问题，但是可能存在其他潜在问题
let arr = createArray(3, 222);
let newArr = arr.map(item => item.length);
// console.log(newArr);    // [undefined, undefined, undefined]
// 使用泛型
function createArray_(items, value) {
    return new Array(items).fill(value);
}
// let arr_ = createArray_<number[]>(4, [1,2,3]);
// let arr_ = createArray_<number>(4, 666);
let arr_ = createArray_(4, 'apple');
// console.log(arr_);
let lenArr = arr_.map(item => item.length);
// console.log(lenArr);
// function prop(obj: {}, key: string){
//     // 返回值均为 any 类型
//     return obj[key]
// }
function prop(obj, key) {
    return obj[key];
}
const todo = {
    id: 1,
    text: 'Buy milk',
    due: new Date()
};
const val_id = prop(todo, 'id');
console.log(val_id);
const val_text = prop(todo, 'text');
console.log(val_text);
const val_due = prop(todo, 'due');
console.log(val_due);
