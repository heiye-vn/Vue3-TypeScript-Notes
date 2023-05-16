"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*       存取器（getters/setters）
*           - 如果 get 存在但是没有 set，则该属性被推断为 readOnly
*           - 如果不指定 setter 参数的类型，则
*
*/
class Person {
    _fullName;
    constructor(fullName) {
        this._fullName = fullName;
    }
    get fullName() {
        console.log('触发get...');
        return this._fullName;
    }
    set fullName(val) {
        console.log('触发set...');
        this._fullName = val;
    }
}
let p = new Person('zhangsan');
// 修改姓名, 触发 set 方法
p.fullName = 'lisi';
// 获取该属性成员数据, 触发 get 方法
console.log(p.fullName);
