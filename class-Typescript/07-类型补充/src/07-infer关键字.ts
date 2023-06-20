export default {};

/*
*       在 ts 中，infer 是用于类型推断的关键字，通常与条件类型结合使用，用于表达式中类型推断
*
*       infer 语法的现限制：
*           - infer 只能在条件类型的 extends 语句中使用
*           - infer 得到的类型只能在条件语句为真(true)的语句中使用
*
*       注：这里的类型包括数组类型、元组类型、函数类型、字面量类型等
* */

namespace a {
    // 推断数组(元组)的类型
    // (infer U)  和 string[]、number[] 类似，这里 infer U 即为推断的类型
    type InferArray<T> = T extends (infer U)[] ? U : never;

    type MyType1 = InferArray<number[]>;    // number
    type MyType2 = InferArray<boolean>;     // never
    type MyType3 = InferArray<(number | string)[]>;     // number | string
}


namespace b {
    // 推断数组(元组)第一个元素的类型
    // [infer F, ...infer _] 中 infer F 推断的是数组第一个元素类型，...infer _ 推断的是数组其他的元素类型，这里不需要其他的所以使用_代替
    type InferFirst<T extends unknown[]> = T extends [infer F, ...infer _] ? F : never;

    type MyType1 = InferFirst<[string, number, boolean]>;   // string
    type MyType2 = InferFirst<[false, "hello", 999]>;       // false
}

namespace c {
    // 推断数组(元组)第一个元素的类型
    type InferLast<T extends unknown[]> = T extends [...infer _, infer L] ? L : never;

    type MyType1 = InferLast<[string, number, false]>;      // false
    type MyType2 = InferLast<[1, 2, 3]>;    // 3
}

namespace d {
    // 推断函数类型的参数类型
    type InferParameters<T extends Function> = T extends (...args: infer R) => any ? R : never;

    type MyTpe1 = InferParameters<((a: number, b: boolean) => void)>;    // [number, boolean]
}

namespace e {
    // 推断函数类型的返回值类型
    type InferReturnType<T extends Function> = T extends (...args: any) => infer R ? R : never;

    type MyTpe1 = InferReturnType<((a: number, b: boolean) => string)>;    // string
}

namespace f {
    // 推断 Promise 返回值(resolve、reject)的类型
    type InferPromise<T> = T extends Promise<infer U> ? U : never;

    type MyType1 = InferPromise<Promise<string>>;   // string
}

namespace g {
    // 推断字符串字面量类型的第一个字符对应的字面量类型
    type InferString<T extends string> = T extends `${infer First}${infer _}` ? First : never;

    type MyType1 = InferString<"Home">;   // "H"
}

namespace demo {
    // type-01
    type Shift<T> = T extends [infer L, ...infer R] ? [...R] : [];

    type MyType1 = Shift<[string, number, boolean]>;    // [number, boolean]
    type MyType2 = Shift<boolean>;      // []

    // type-02
    type Pop<T extends unknown[]> = T extends [...infer L, infer R] ? [...L] : [];

    type MyType3 = Pop<[string, boolean, number]>;    // [string, boolean]

    // type-03
    type Reverse<T extends unknown[], U extends unknown[] = []> = [] extends T ? U : T extends [infer L, ...infer R] ? Reverse<R, [L, ...U]> : U;

    // type-04
    type FlipArguments<T extends Function> = T extends (...arg: infer R) => infer S ? (...arg : Reverse<[...R]>) => S : T;

    // type-05
    type StartsWith<T extends string, U extends string> = T extends `${U}${infer R}` ? true : false;

    type MyType8 = StartsWith<'write', 'world'>;

    // type-06
    type TrimLeft<S extends string> = S extends `${infer L}${infer R}` ? L extends ' ' | '\n' | '\t' ? TrimLeft<R> : S : '';

    // type-07
    type Trim<S extends string> = S extends `${' ' | '\t' | '\n'}${infer R}` ? Trim<R> : S extends `${infer L}${' ' | '\t' | '\n'}` ? Trim<L> : S;

    // type-09
    type StringToUnion<T extends string, U = never> = T extends '' ? U : T extends `${infer L}${infer R}` ? StringToUnion<R, U | L> : U;

}
