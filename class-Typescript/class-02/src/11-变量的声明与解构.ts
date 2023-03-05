export default {};


/*
*       使用 var、let、const 关键字声明变量
*
*       由于 var 在作用域规则中存在特殊性，所以在ts中声明变量时避免使用 var 进行声明
*
*       let 和 const 是 es6 语法，其中 const 是 let 的增强，可以防止重新分配值给变量
*
* */

// function f(){
//     var a = 10;
//     return function g(){
//         var b = a + 1;
//         return b;
//     };
// };
//
// var g = f();
// console.log(g());

// function f(){
//     let a = 10;
//     return function g(){
//         let b = a + 1;
//         return b;
//     };
// };
//
// const g = f();
// console.log(g());


/*  数组解构  */
let input: number[] = [1, 2];
let [first, second] = input;
[first, second] = [second, first];

// console.log(first);
// console.log(second);

function fn([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}

// fn([333,444]);

let [el, ...rest]: number[] = [1, 2, 3, 4, 5];
// console.log(el);
// console.log(rest);

let [one]: number[] = [11, 22, 33];
// console.log(one);

let [, , two, , three]: number[] = [1, 2, 3, 4];
// console.log(two);
// console.log(three);


/*
*   元组解构：元组可以像数组一样被解构；解构变量获取相应元组元素的类型
*
* */
let tuple: [number, string, boolean] = [7, 'hello', true];
// let [a, b, c] = tuple;


/*  对象解构  */
let arrObj: any[];
arrObj = [
    {name: "张柏芝", age: 45, marry: true},
    {name: '刘诗诗', age: 42, marry: true},
    {name: "欧阳娜娜", age: 27, marry: false},
    {name: '杨超越', age: 24, marry: false},
    {name: '', age: 999, marry: false}
];
const nameList: string[] = arrObj.map(({name}) => name).filter(Boolean);
// console.log(nameList);

let o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
// let { a, b } = o;
// 必须用括号括住这个语句
// ({ a, b } = {a: 'baz', b: 101});
// console.log(a);
// console.log(b);

// 属性重命名
// a as newName1, b as newName2
// let {a: newName1, b: newName2} = o;
// 等同：let newName1 = o.a   let newName2 = o.b

// let {a: newName1, b: newName2}: {a:string, b:number} = o
// console.log(newName1);
// console.log(newName2);

// 默认值
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let {a, b = 1001} = wholeObject;
    console.log(a, '-----------a');
    console.log(b, '-----------b');
}

keepWholeObject(o);



