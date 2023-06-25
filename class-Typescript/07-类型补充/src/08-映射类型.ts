export default {};

/*
*       映射类型是一种泛型类型，使用 PropertyKey（一般使用 keyof）的联合来遍历键从而创建(映射)一个新的类型
*
*       映射类型建立在索引签名之上，用于声明为提前声明的属性类型
*
*       映射修饰符：(?)：可选性、(readOnly)：可变性，两个修饰符可以通过 + 和 - 来添加或删除修饰符，默认为 +
*
*       使用 as 可以重新映射键：
*           [oldKey in keyof Type as newKey]
* */

namespace a {
    interface Person {
        attr1: string;
        attr2: number;
    }

    type BooleanType<T> = {
        [K in keyof T]: boolean;
    }

    type NewPerson1 = BooleanType<Person>;

    let obj1: NewPerson1 = {
        attr1: true,
        attr2: false
    };
    // console.log(obj1);

    // readOnly 只读修饰符映射
    type ReadOnlyType<T> = {
        readonly [K in keyof T]: T[K];
    }
    type NewPerson2 = ReadOnlyType<Person>;
    let obj2: NewPerson2 = {
        attr1: "hello",
        attr2: 666
    };
    // obj2.attr1 = 'world';   // error: Cannot assign to 'attr1' because it is a read-only property
    // console.log(obj2);

    // ? 可选修饰符映射
    type OptionalType<T> = {
        -readonly [K in keyof T]-?: T[K];
    }
    type NewPerson3 = OptionalType<Person>;
    let obj3: NewPerson3 = {
        attr1: "person",
        attr2: 999
    };
    // console.log(obj3);
}

namespace b {
    type GetFun<T> = {
        [K in keyof T as `get${Capitalize<K & string>}`]: () => T[K];
    }

    interface Person {
        name: string;
        age: number;
        gender: string;
    }

    type Getter = GetFun<Person>;

    let person: Getter = {
        getName: (): string => {
            return "zhangsan";
        },
        getAge: (): number => {
            return 20;
        },
        getGender: (): string => {
            return "hello";
        }
    };

    console.log(person.getName());
}

namespace c {
    interface Person {
        name: string;
        age: number;
    }

    // 结合条件类型使用
    type FilterAttr<T> = {
        [K in keyof T as Exclude<K, 'name'>]: T[K];
    }

    type Test = FilterAttr<Person>;
}

namespace d {
    type SquareEvent = { kind: 'square', x: number, y: number };
    type CircleEvent = { kind: 'circle', radius: number };

    type EventConfig<Events extends { kind: string }> = {
        [E in Events as E['kind']]: (event: E) => void;
    }

    type Config = EventConfig<SquareEvent | CircleEvent>;
}
