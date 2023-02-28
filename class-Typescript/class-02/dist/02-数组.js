"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*   数组类型（Array）
*
*   创建数组的方式有多种
* */
// 方式1 字面量方式
let animalList;
animalList = ['cat', 'dog', 'mouse', 'wolf'];
// animalList = ['pig', 111, false]
// 方式2 泛型数组
let moneyList;
moneyList = [10, 20, 30];
// moneyList = [222, 333, false]
// 方式3 联合类型
let dream;
dream = [111, '李四', '王五', 444];
let otherType;
otherType = ['111', false, '娃哈哈', 999, [], ['张三', '李四']];
console.log(otherType);
// 方式四 任意类型(非常好用，但是不推荐，失去了类型检查)
let testList;
testList = [111, 'hello', false, [1, 'world'], { name: '张三' }];
console.log(testList);
/*
*   总结:
*       数组是我们在开发过程中最常用的数据类型，比如传参发送请求、获取接口数据等等。因此
*       我们需要额外注意数组在该场景下的使用
* */
