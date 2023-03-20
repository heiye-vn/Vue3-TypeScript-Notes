export default {};

/*
*       接口（interface）与类型别名（type alias）的区别
*
*           1. interface 只描述（约束）对象，type 可以描述任何数据
*
*           2. interface 使用 extends 来实现继承，type 使用 & 来实现交叉类型（都可以实现多继承）
*
*           3. interface 会创建新的类型名，type 只是创建类型别名，没有创建新的类型
*
*           4. interface 可以重复声明进行扩展，type 无法重复声明
* */

// 区别1. interface 只描述（约束）对象，type 可以描述任何数据
type Account = "现金" | "银行卡" | "微信" | "医保"

let account: Account = "现金";
console.log(account);

interface AccountObj {
    name: string;
}

let accountList: Array<AccountObj> = [{name: "现金"}, {name: "银行卡"}, {name: "网银"}, {name: "医保"}];
console.log(accountList);


type Point = {
    x: number;
    y: number;
    readonly z: number;
    description?: string;
}

let point1: Point = {
    x: 100,
    y: 200,
    z: 300,
    description: "a space position point"
};
point1.x = 50;
point1.y = 50;
// console.log(point1);


// 区别4. interface 可以重复声明进行扩展，type 无法重复声明
interface IPerson {
    name: string;
}
interface IPerson {
    age: number;
    sex: string;
}

let person1: IPerson = {
    name: '张三',
    age: 20,
    sex: '男'
};
console.log(person1);
