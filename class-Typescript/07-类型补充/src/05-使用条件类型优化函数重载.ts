export default {};

console.log("======函数重载======");
namespace a {
    // 函数重载
    function add(x: number, y: number): number;
    function add(x: string, y: string): string;
    function add(x: any, y: any) {
        return x + y;
    }
    console.log(add(10, 2));
    console.log(add("hello", " world"));
    let a: number | string;
    let b: number | string;
    // add(a, b)    // error
}


console.log("======使用泛型解决(存在问题)======");
namespace b {
    // 使用泛型
    function add<T extends number | string>(x: T, y: T): T;
    function add(x: any, y: any) {
        return x + y;
    }
    const a: number = 10;
    const b: string = "str";
    console.log(add(a, a));
    console.log(add(b, b));
    // console.log(add(a, b)); // error: Argument of type 'string' is not assignable to parameter of type 'number'

    add(1, 2);  // //function add<1 | 2>(a: 1 | 2, b: 1 | 2): 1 | 2
    add<number>(6, 6);
    add<string>('aaa', 'ccc');
}


console.log("======使用条件类型======");
namespace c {
    // 使用条件类型
    function add<T extends number | string>(a: T, b: T): T extends number ? number : string;
    function add(a: any, b: any){
        return a + b;
    }
    const param1: number = 10;
    const param2: string = "str";
    console.log(add(param1, param1));
    console.log(add(param2, param2));
    add<number>(1, 2)
    add<string>('hello', ' world')
}


