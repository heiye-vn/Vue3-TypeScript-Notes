export default {};

/*
*        typescript 中的 type 关键字
*           type：类型别名，给类型添加一个新的名字（或者叫做定义一个新的类型），为了给类型注解设置别名的便捷语法，可以用于原始值（基本类型），联合类型，元组以及其他任何需要手写的类型
* */

/* 1.使用 type 定义原始值、联合类型、对象、元组、函数 */
type numData = number;
let numVal: numData = 10;
// console.log(numVal);

type strOrNum = string | number;
let val: strOrNum = 'hello';
val = 144;
// val = true;     // Type 'boolean' is not assignable to type 'strOrNum'
// console.log(val);

type data = [number, string, boolean, object];
let tupleVal: data = [10, 'haha', false, {name: '张三'}]
// console.log(tupleVal);

type objData = { name: string, age: number }
let objVal: objData = {name: '张三', age: 30}
// console.log(objVal);

type personObj = {
    name: string;
    age: number;
    likes: string[];
}
const personArr: Array<personObj> = [
    {name: '张三', age: 17, likes: ['haha', 'xix', 'heihei']},
    {name: '李四', age: 38, likes: ['haha', 'xixi', 'heihei']},
    {name: '王五', age: 23, likes: ['haha', 'xixi', 'heihei']},
    {name: '', age: 23, likes: ['haha', 'xixi', 'heihei']},
];
const nameList: string[] = personArr.map(({name}) => name).filter(Boolean);
// console.log(nameList);

type callBack = (data: string) => void


/* 2.配合 in 关键字映射类型（for...in） */
type carKey = 'name' | 'model' | 'color' | 'price';
type carObj = {
    [key in carKey]: string | number
}
let car: carObj = {name: 'Audi', model: 'suv', color: 'white', price: 350000};
console.log(car);
