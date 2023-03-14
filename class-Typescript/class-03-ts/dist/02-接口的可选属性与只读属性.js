/*
*       接口的可选属性与只读属性
*
*           可选属性：在定义接口时，有些属性是可有可无的，有些只是在某些条件下存在，或者根本不存在；在属性后面加个 ? 修饰。
*
*           只读属性：一些对象的属性在初始化后就不允许再对其修改，可以使用 readonly 修饰符，表示该属性无法被修改，类似 const 关键字。
*
*           const 与 readonly 的区别：作用在变量上时就使用 const，作用在对象属性上时就使用 readonly
* */
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
