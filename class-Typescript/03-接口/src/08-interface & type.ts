export default {};

/*
*       interface：主要用于定义（约束）对象、函数的结构类型
*
*       type：主要用来给类型定义新的名字，也可以约束对象、函数的结构类型
*
* */


//  相同点：都可以约束对象和函数的结构类型
interface MyObj {
    name: string;
    code: number;
}

interface MyFun {
    (name: string, age: number): string;
}

let selfIntroduce: MyFun;
selfIntroduce = (...args: Array<string | number>): string => {
    return `${args[0]}, ${args[1]}`;
};
// console.log(selfIntroduce("张三", 10));


type MyObj_ = {
    name: string;
    code: number;
}

type MyFun_ = {
    (name: string, age: number): string;
}
let selfIntroduce_: MyFun_ = (arg1: string, arg2: number): string => {
    return `${arg1}-----${arg2}`
}
// console.log(selfIntroduce_("李四", 30));


//  相同点：都允许扩展
interface Area {
    width: number;
    height: number;
}

interface Picture extends Area {
    color: string;
    imgSrc: string;
}
let myPicture: Picture = {
    color:'green',
    imgSrc:'https://www.baidu.com/img/01.jpg',
    width: 200,
    height: 200
}
// console.log(myPicture);

type Area_ = {
    width: number;
    height: number;
}

type Picture_ = Area_ & { color: string, imgSrc: string }
let myPicture_: Picture_ = {
    width: 100,
    height: 100,
    color: 'red',
    imgSrc: 'http://zsp.gold/image/basic/02.png'
}
// console.log(myPicture_);



// 不同点：type 可以声明基本类型别名、函数、对象、联合类型、字符串字面量、元组、获取类型实例

type Name = string;
type NameResolve = () => string;
type Info = string | number | Array<string | number> | boolean;
type NameOrNameResolve = Name | NameResolve;
function getName(n: NameOrNameResolve): Name{
    if(typeof n === 'string'){
        return n
    }else{
        return n()
    }
}

type NormalColor = 'red' | 'green' | 'blue';

// 获取实例类型
type Person = {
    name: string;
    age: number;
}

let person: Person = {
    name: '娃哈哈',
    age: 999
}

type OtherObj = typeof person;

let otherObj: OtherObj = {
    name: '麻子',
    age: 35
}
// console.log(otherObj);



// 不同点：interface 可以重复声明（合并），type 无法重新声明
interface User {
    name: string;
}

interface User {
    age: number;
}
