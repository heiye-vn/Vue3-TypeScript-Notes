export default {}
/*
*       函数接口
*           接口不仅可以描述对象的属性和方法，还能描述函数的类型
*           在接口中定义函数的参数列表和返回值类型。每个参数都需要名字和类型
*           函数的形参名和接口中定义的名称可以不用相同，保证参数类型匹配即可
* */

interface IPerson_fun {
    (arg1: string, arg2: number): void;
}

let person_fun: IPerson_fun = (name: string, age: number): void => {
    console.log(name);
    console.log(age);
};
// person_fun("张三", 50);


interface IPerson_fun2 {
    (arg1: object, arg2: string): void;
}

let person_fun2: IPerson_fun2 = (person: { name: string, age: number }, job: string): string => {
    return `My name is ${person.name}，${person.age} years old，job is ${job}`;
};
const personIntroduce = person_fun2({name: "Bod", age: 30}, "doctor");
// console.log(personIntroduce);


type StrOrNum = number | string;

interface IPerson_fun3 {
    (arg1: string, ...args: StrOrNum[]): void;
}

let person_fun3: IPerson_fun3 = (name: string, age: number, sex: string, likes: string): void => {
    console.log(name);
    console.log(age);
    console.log(sex);
    console.log(likes);
};
// person_fun3("张三", 30, "男", "吃，喝，玩乐");


// 实现一个复杂的函数类型接口
interface Actual_1 {
    name: string;
    age: number;
}

interface Person3 {
    // 使用解构赋值获取参数，Actual_1接口约束了实参只能是接口定义的属性 name、age
    ({name, age}: Actual_1): void;
}

// 函数中使用结构赋值将形参 name 名称更改为 Iname，即：{name: Iname, age} <===> {name:xxx, age:xxx}
let func: Person3 = ({name: Iname, age}: Actual_1): void =>{
    console.log(`${Iname},${age}`)
}
func({ name:'Boolean', age:50 })

// 上述函数不用接口实现的话
let func_ = ({name: nickName, age}: {name: string, age: number}):void =>{
    console.log(`${nickName}, ${age}`)
}
func_({name:'李四', age:30})

/*
*       总结：
*           接口的好处在于可复用及可扩展性
*           上面例子中的 Actual_1 约束了函数的参数，还可以约束具备相同属性的对象。Person3 也可以约束很多相同功能的函数
* */
