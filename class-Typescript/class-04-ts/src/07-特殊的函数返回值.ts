export default {};

/*
*       特殊的函数返回值
*           1. 如果使用类型别名定义了一个返回值为 void 类型的函数，在使用是可以有返回值，并且该返回值是有效的
*
*           2. 如果我们在定义函数时明确标注返回类型为 void，那么在返回除了 undefined 和 null 之外的值时会报错
* */

type VoidTest = () => void;

const voidTest1: VoidTest = function () {
    return 333;
};
// console.log(voidTest1());

const voidTest2: VoidTest = () => {
    return "hello world";
};
// console.log(voidTest2());


// 声明函数时如果标注返回类型为 void，时返回除 undefined 和 null 之外的值会报错
const voidTest3 = function (): void {
    // return 333;  Type 'number' is not assignable to type 'void'
    // return new Error('error')   Type 'Error' is not assignable to type 'void'
    return null;
};
console.log(voidTest3());
