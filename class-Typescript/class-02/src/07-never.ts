export default {};

/*
*       Never类型
*           never类型表示的是那些永不存在的值的类型（无类型无值）
*           never类型是那些总会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
*           变量也可能是never类型，当它们被永不为真的类型保护所约束时
*
*           never类型是任何类型的子类型，也可以赋值给任何类型
*           然而，没有类型是never的子类型或赋值给never类型，即使是 any 类型也无法赋值
*
* */

let a: number = 10;
let b: never;
a = b;
// console.log(a);

let x: never;
// console.log(x === a);

let m: any = 20;
// m = never
// x = m
// console.log(m);

// 抛出异常、错误
function error(msg: string): never {
    throw new Error(msg);
}

// error('This is error message！')

function fail(): never {
    return error("error");
}

// fail()

const arrowFail = (): never => {
    return error("throw error!");
};
// arrowFail();

// const bar: never = (()=>{
//     throw Error('Throw my hands in the air like i just dont care')
// })()


function infiniteLoop(): never {
    while (true) {
    }
}

// infiniteLoop()


// 例：使用 never 做类型检查
function throwError(val):never{
    throw new Error(`${val} is not of type number `)
}

function typeCheck(x: string | number): boolean {
    if (typeof x === "number") {
        return true;
    }else{
        throwError(x)
    }
}
// typeCheck('hello')




