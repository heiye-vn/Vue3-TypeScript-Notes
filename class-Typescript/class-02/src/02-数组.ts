export default {}

/*
*   数组类型（Array）
*
*   创建数组的方式有多种
* */

// 方式1 字面量方式
let animalList: string[];
animalList = ['cat', 'dog', 'mouse', 'wolf'];
// animalList = ['pig', 111, false]


// 方式2 泛型数组
let moneyList: Array<number>;
moneyList = [10, 20, 30]
// moneyList = [222, 333, false]


// 方式3 联合类型
let dream: (string | number)[];
dream = [111, '李四', '王五', 444]

let otherType: (string | boolean | number | string[])[];
otherType = ['111', false, '娃哈哈', 999, [], ['张三', '李四']]
// console.log(otherType)


// 方式四 任意类型(非常好用，但是不推荐，失去了类型检查)
let testList: any[]
testList = [111, 'hello', false, [1,'world'], {name:'张三'}]
// console.log(testList);


// 定义指定对象成员的数组
// 方式一
let arrObj: {
    name: string,
    age: number,
    interest: string[]
}[];

arrObj = [
    { name:'张三', age: 20, interest:['篮球', '足球', '羽毛球'] },
    { name:'小红', age: 18, interest:['钢琴', '贝斯', '小提琴'] }
];

console.log(arrObj);

// 方式二
interface Car {
    name: string;
    color: string;
    price: number;
}

let cars: Array<Car> = [
    { name:'宝马', color:'白色', price: 400000 },
    { name:'奥迪', color:'黑色', price: 320000 },
    { name:'雅阁', color:'水晶白', price: 180000 },
];

console.log(cars);

/*
*   总结:
*       数组是我们在开发过程中最常用的数据类型，比如传参发送请求、获取接口数据等等。因此
*       我们需要额外注意数组在该场景下的使用
* */
