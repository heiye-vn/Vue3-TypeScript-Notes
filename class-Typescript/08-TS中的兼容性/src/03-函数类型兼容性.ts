export default {};

/*
*       函数兼容性：在TS中，函数兼容性指的是在类型系统中判断一个函数能否赋值给另一个函数类型。当两个函数有相同的参数列表和返回类型时，它们被认为是兼容的。
*
*       兼容性规则：
*           1.参数个数：如果目标函数的参数个数小于等于源函数的参数个数，则他们是兼容的
*
*           2.参数类型：如果目标函数的参数类型可以分别赋值给源函数的对应参数类型，那么它们是兼容的。意味着目标函数的参数类型必须是源函数参数类型的子类型。
*
*           3.返回类型：如果目标函数的返回类型可以分别赋值给源函数的返回类型，那么它们是兼容的。
*
* */

// 参数个数：参数少的函数可以赋值给参数多的函数
namespace a {
    let fn1 = (x: string, y: number) => {};

    let fn2 = (a: string) => {};

    fn1 = fn2;
}

// 参数类型必须相同
namespace b {
    let func1 = (name: string, age: number) => {};
    let func2 = (address: string) => {};

    func1 = func2;
}

// 函数返回值必须相同(依赖参数类型也相同)
namespace c {
    let func1 = (x: number, y: string): string => { return '' };
    let func2 = (id: number, name: string, age: number): string => { return '' };

    func2 = func1;
}
