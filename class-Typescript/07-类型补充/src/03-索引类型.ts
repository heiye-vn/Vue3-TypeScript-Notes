export default {};

/*
*       索引类型
*           在实际应用中，可能会遇到将对象中的一些属性提取出来创建一个新的集合的场景。
*
*       1. 索引类型查询操作符
*           ( keyof T )：表示类型所有公共属性的字面量的联合类型，以下例子中即为 produceObj 的属性名
*           'name' | 'unit' | 'ptypeName' | 'price' | 'quantity'
*
*       2. 索引访问操作符
*           ( T[K] ): T[K] 表示对象 T 的属性 K 所表示的类型
*           其实在 js 中，我们访问数组也用到了该方式；对于对象来说，我们知道一般有两种方式访问（. 操作符 和 [] 操作符），[]操作符一般情况下是用于索引为变量时的访问
*
*       3. 泛型约束
*           ( K extends T )：泛型变量可以通过继承某些类型从而获取该类型上所有的属性
* */

interface Product {
    name: string;
    unit: string;
    ptypeName: string;
    price: number;
    quantity: number;
    isTiny?: boolean;
}

let produceObj: Product = {
    name: '云南白药',
    unit: '瓶',
    ptypeName: '以岭药业',
    price: 30,
    quantity: 10
};

function getValue<T, K extends keyof T>(obj: T, keys: K[]): T[K][]{
    // let valArr = [] as T[K][];
    //
    // keys.forEach(key=>{
    //     valArr.push(obj[key]);
    // })
    //
    // return valArr

    return keys.map(key=> obj[key]);
}

console.log( getValue(produceObj, ['name', 'price', 'quantity']) );
// console.log(getValue(produceObj, ["class"]));   // error
