"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
const myFullName = {
    firstName: '张',
    lastName: '娜拉'
};
myFullName.age = 20;
const tiger = {
    name: '老虎',
    kind: '陆地',
    eat() {
        console.log('只吃肉');
    }
};
tiger.name = '鳄鱼';
// tiger.kind = '两栖'   // Cannot assign to 'kind' because it is a read-only property
console.log(tiger);
