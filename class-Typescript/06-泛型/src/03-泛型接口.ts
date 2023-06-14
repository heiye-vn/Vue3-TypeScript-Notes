export default {};

/*
*       泛型接口
*           在定义接口时，为接口中的属性或方法定义泛型类型，在使用接口时，再指定具体的泛型类型
*/

// interface IPerson {
//     name: string;
//     age: number;
// }

interface IPerson<T1, T2> {
    name: T1;
    age: T2;
}

let p: IPerson<string, number> = {
    name: '王子文',
    age: 25
}
// console.log(p);

// 泛型参数的默认类型
interface IPerson_<T1 = string, T2 = number> {
    name: T1;
    age: T2;
}

let p1: IPerson_ = {
    name: '金喜善',
    age: 55
}

let p2: IPerson_<string, string> = {
    name: '宋祖儿',
    age: "20"
}

let p3: IPerson_<number, number> = {
    name: 666,
    age: 25
}




// interface CreateArrayFunc {
//     <T>(length: number, value: T): Array<T>;
// }
// let createArray: CreateArrayFunc= function<T>(length: number, value:T): Array<T>{
//     return new Array(length).fill(value);
// }

interface CreateArrayFunc<T = string> {
    (length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc<any> = function<T>(length: number, value: T): Array<T>{
    return new Array(length).fill(value);
}

console.log(createArray(3, {msg: 'hello world'}));