/*
*       模块：在ts中，模块是一种组织和封装代码的方式，比如对公共方法的封装，公共组件的封装，以及第三方插件，库等等，都被称为模块。
*
*       模块的使用离不开导入、导出
*
*       导出分为默认导出(export default)与导出(export)，一个模块文件中只允许一个默认导出
*
*       使用默认导出时，导出的名称与导入时的名称可以不同，但是为了便于代码理解，最好使用相同的名称
*
* */

// import otherFunc from "./02-module";
// console.log(otherFunc(1, 2));

// 非默认导出需要使用 {} 包裹
// import {Person} from "./02-module";
// console.log(Person);


// 引用模块中所有导出的内容
import * as ModuleObj from './02-module'

// console.log(ModuleObj.default(1,2))
// console.log(ModuleObj.Person)


// 对默认导出和普通导出同时引用
import OtherFunc, { Person } from './02-module';

console.log(OtherFunc(5, 20));
console.log(Person);
