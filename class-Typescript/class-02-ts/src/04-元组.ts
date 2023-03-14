export default {}

// 元组类型（Tuple）
let myTup1: [string, number, boolean]
myTup1 = ['张三', 30, false];
myTup1 = ['李四', 10, true]

let myTuple2: [string, Array<string>, number, Array<number>]
myTuple2 = ['刘亦菲', ['陈钰琪', '文咏珊'], 30, [11,22,33,44]]
// console.log(myTuple2[2].substring(1))

/*
*       元组：表示一个已知元素数量和类型的数组，其元素类型不必相同，但是必须元素的类型和值必须对应,长度也需要一致
*
*       越界的元素：向元组中添加新元素时，元素的类型会被限制为当前元组中类型的联合类型；
* */

let tom: [string, number];
tom = ['Tom', 26];
tom[0] = 'jerry';

// console.log(tom);
// console.log(tom[0].slice(1));
// console.log(tom[1].toFixed(2));

// tom.push('mail');
// tom.push(111);

console.log(tom);