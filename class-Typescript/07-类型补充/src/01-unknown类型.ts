export default {};

/*
*       unknown 类型：
*           该类型和 any 类型用法差不多，区别在于 unknown 并没有关闭对类型的校验(注：使用 any 类型时在编译阶段会关闭类型校验)，它可以接受所有类型的赋值，
*       但是将一个 unknown 类型的数据赋值给其他数据类型时会报错，只有它本身和 any 类型接受。
*
*           unknown 代表任何值。与 any 类似，但是使用 unknown 更安全，因为对未知 unknown 值做任何事情都是不合法的
*           unknown 被称作安全的 any
*
*       举例(any 和 unknown的理解)
*           any 和 unknown 是幼儿园的两个“小朋友”，其中 any 喜欢跟所有小朋友玩，所有小朋友也愿意和 any 玩(相互)；unknown 是接受和所有小朋友玩，但是主动要求别人时除了 any，都不和他玩。
*       如果必须要有一个玩伴，老师就会强制要求（“类型断言”）分配一个
* */

// 1.任何类型都可以赋值给 unknown 类型
let testVal: unknown;

testVal = 123;
testVal = 'hello world';
testVal = Boolean(false);
testVal = { name:'zhangsan', age: 18 };
testVal = [1,2,3,4];
testVal = Symbol('111');
testVal = BigInt(10);

// console.log(testVal);
// console.log(typeof testVal);


// 2. unknown不能赋值给其他类型，any 除外
// let testVal1: unknown = 20;
let testVal1: unknown = "hello";

let num: number;
// num = testVal1;     // error: Type 'unknown' is not assignable to type 'number'

let str: string;
// str = testVal1;     // error:  Type 'unknown' is not assignable to type 'string'

let anyVal: any;
anyVal = testVal1;

// 使用类型缩小解决
if(typeof testVal1 == 'number'){
    num = testVal1;
}
if(typeof testVal1 == 'string'){
    str = testVal1;
}
// console.log(num);
// console.log(str);

// 使用类型断言解决
let num1: number = <number>testVal1;
// console.log(num1);
let str1: string = testVal1 as string;
// console.log(str1);


// 3. unknown 类型与其他类型组成的交叉类型的结果为其他类型
type MyType = number & unknown;
type MyType1 = unknown & boolean;
type MyType2 = unknown & any;

let a: MyType = 666;
let b: MyType1 = false;
let c: MyType2;


// 4. unknown 类型与其他类型组成的联合类型为 unknown 类（与any类型的结果为any类型）
type MyType3 = unknown | number | string;

let d: MyType3 = 'hello';
d = false;
// console.log(d);

type MyType4 = unknown | any;

let e: MyType4;     // any


// 5. never 类型是 unknown 类型的子类型
type MyType5 = never extends unknown ? true : false;

let f: MyType5 = true;
// console.log(f)


// 因为对未知 unknown 值做任何事情都是不合法的，可以使用类型断言
let  test: unknown = 'hello world';
// console.log( (<string>test).length );
console.log((test as string).length );
