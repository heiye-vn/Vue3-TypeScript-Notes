export default {};

/*
*       在 TS 中，泛型的兼容性是指当涉及到使用泛型类型的变量、函数、类等时，如何判断它们之间是否兼容。
*           1.空泛型的兼容性：如果一个泛型不包含任何具体类型参数，那么它与任何其他类型兼容
*
*           2.泛型参数个数兼容性：当涉及泛型参数的个数时，ts需要确保参数个数匹配。例如，一个接收一个泛型参数的函数不会与一个接收两个泛型参数的函数兼容
*
*           3.泛型参数类型兼容性
*
*           4.泛型约束兼容性：如果一个泛型类型在声明时使用了约束（使用'extends'关键字），那么在判断兼容性时也需要考虑这些约束条件
*
* */

namespace a {
    // 定义空泛型接口
    interface EmptyBox<T> {
    }

    let test1: EmptyBox<string> = {value: '张三'};
    let test2: EmptyBox<number> = {value: 666};
    let test3: EmptyBox<boolean> = {value: false};

    // console.log(test3);
    test3 = test1
    // console.log(test3);
}

namespace b {
    // 定义单个泛型参数接口
    interface SingleTest<T> {
        value: T
    }

    // 定义多个泛型参数接口
    interface MultipleTest<T, U> {
        firstArg: T
        secondArg: U
    }

    const test1: SingleTest<number> = {value: 20}
    const test2: SingleTest<string> = {value: 'hello'}
    // console.log(test2);
    const test3: SingleTest<any> = test1;
    // console.log(test3);

    const test4: MultipleTest<string, number> = {firstArg: '张三', secondArg: 30}
    // 即使泛型参数个数相同，类型不兼容也是不兼容的
    // const test5: MultipleTest<number, string> = test4   // error
    const test5: MultipleTest<string, any> = test4
    // console.log(test5);

    // 单个泛型参数接口不能兼容多个泛型参数接口
    // const test6: SingleTest<any> = test4     // error

}

namespace c {
    // 定义一个带泛型约束的接口
    interface Test<T extends number> {
        value: T
    }

    const test1: Test<number> = {value: 123}

    const test2: Test<any> = test1
    console.log(test2);

    // 泛型参数类型不兼容
    // const test3: Test<string> = test1; // error
}