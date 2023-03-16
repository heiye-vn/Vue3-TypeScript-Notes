export default {};

/*
*       接口的混合类型
*           接口约束的内容有属性、方法、函数
* */

// 场景：实现数值的累加

// 1. 使用全局变量（会污染全局）
let count: number = 0;

function addVal1(): void {
    count++;
    console.log(count);
}

// for(let i = 0;i < 3;i++){
//     addVal1()
// }


// 2. 使用闭包
let addVal2 = (() => {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    };
})();
// for(let i = 0;i < 3;i++){
//     addVal2()
// }


// 3. 函数本质上也是一个对象，可以在函数上添加一个属性（ts中会编译错误）
// let addVal3 = function(){
//     addVal3.count++;
//     console.log(addVal3.count);
// }
// addVal3.count = 0;
// for(let i = 0;i < 3;i++){
//     addVal3()
// }


// 4. 使用接口方式结合闭包实现方法3的
interface CountVal {
    count: number;

    (): void;
}

let addVal4 = (function (): CountVal {
    let fn = <CountVal>function () {
        fn.count++;
        console.log(fn.count);
    };
    fn.count = 0;
    return fn;
})();
for (let i = 0; i < 3; i++) {
    addVal4();
}

console.log("============================================================================");

interface CountVal_ {
    (): void;

    count: number;

    add(): void;
}

function addVal5(arg?: number) {
    let sum = <CountVal_>function () {
    };
    sum.count = arg || 0;
    sum.add = function () {
        sum.count++;
        console.log(sum.count,'---add');
    };
    return sum;
}

let res = addVal5(10);
for (let i = 0; i < 3; i++) {
    res.add();
}


console.log("============================================================================");


interface Lib {
    (): void;   // 函数

    version: string;    // 属性

    doSomething(): void;    // 方法
}

function getLib(val: string) {
    // let lib = (()=>{}) as Lib;      // 声明 lib 为一个函数，断言为 Lib
    let lib = <Lib>function () {
    };
    lib.version = val || "1.0";
    lib.doSomething = function () {
        console.log("do something");
    };
    return lib;
}

let result = getLib("2.1.5");
// result();
console.log(result.version);
result.doSomething();
