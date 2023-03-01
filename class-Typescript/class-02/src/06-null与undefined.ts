export default {}

/*
*       ts 中，undefined 和 null 有各自特有的类型叫 undefined 类型 和 null 类型，它们的本身的类型用处不是很大
*
*       非严格模式下，undefined 和 null 是所有类型的子类型。
* */

let x :undefined = null
x = undefined
// console.log(x)

let y: null = undefined
y = null
// console.log(y);

let num: number = 10
num = undefined
num = null
// console.log(num);

let str: string = '刘诗诗'
str = null
str = undefined
// console.log(str);