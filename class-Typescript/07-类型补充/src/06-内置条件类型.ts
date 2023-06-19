export default {};

/*
*       TS 中的内置条件类型
*           - Exclude<T, U>: 从类型 T 中剔除可以赋值给类型 U 的成员（排除相同的，留下不同的）
*           - Extract<T, U>: 从类型 T 中取出可以赋值给类型 U 的成员（排除不同的，取出相同的）
*           - NonNullable<T>: 从类型 T 中排除 null 和 undefined（不能为空）
*           - ReturnType<T>: 获取函数类型 T 的返回类型
* */

namespace exclude {
    // 内置类型实现
    // type Exclude<T, U> = T extends U ? never : T;

    type Person = 'name' | 'age';
    type Student = 'name' | 'age' | 'school' | 'class'

    type DiffType = Exclude<Student, Person>;   // "school" | "class"
}

namespace extract {
    type Extract <T, U> = T extends U ? T : never;

    type Person = 'name' | 'age';
    type Student = 'name' | 'age' | 'school' | 'class'

    type DiffType = Extract<Student, Person>;   // "name" | "age"
}

namespace nonNullable {
    type NonNullable<T> = T extends null | undefined ? never : T;

    type MyType = string | boolean | null | undefined;

    type FilterType = NonNullable<MyType>;  // string | boolean
}


