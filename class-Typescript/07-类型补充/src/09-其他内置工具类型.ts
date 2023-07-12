export default {};

// 1.Required<Type>：将类型 Type 中的所有属性设置为必选属性（去掉 ? 标记）
namespace a {
    interface Person {
        name: string;
        age?: number;
    }

    type NewPerson = Required<Person>;

    const person: NewPerson = {
        name: "二毛",
        age: 30
        // 此处必须包含 name 和 age 属性
    };
}

// 2.Partial<Type>：将类型 Type 中的所有属性设置为可选（添加 ? 标记）
namespace b {
    interface Todo {
        title: string;
        desc: string | string[];
    }

    type NewTodo = Partial<Todo>;

    const todo: NewTodo = {
        title: "eat",
        desc: "吃饭"
        // 属性 title 和 desc 均可选
    };
}

// 3.Readonly<Type>：将类型 Type 中的所有属性设置为只读（添加 readOnly 标记）
namespace c {
    interface Goods {
        id: number;
        name: string;
    }

    type NewGoods = Readonly<Goods>;

    const goods: NewGoods = {
        id: 20135648977898,
        name: "云南白药"
    };

    // goods.name = '阿莫西林';    // Cannot assign to 'name' because it is a read-only property
}

// 4.Pick<Type, Keys>：从类型 Type 中选区指定属性 Keys 的子集并返回一个新类型，Keys 不能为空
namespace d {
    interface Person {
        name: string;
        age: number;
        sex: boolean;
    }

    type NewPerson = Pick<Person, "name" | "age">;
    // type NewPerson = Readonly<Pick<Person, 'name' | 'age'>>;

    const person: NewPerson = {
        name: "乌兹",
        age: 20
    };

    person.name = "uzi";
}

// 5.Omit<Type, Keys>：从类型 Type 中删除指定属性 Keys，并返回一个新类型，Keys 可以为空，表示不删除属性
namespace e {
    interface Teacher {
        jobNUmber: number;
        name: string;
        subject: string;
        class: string;
    }

    // type NewTeacher = Omit<Teacher, ''>;
    type NewTeacher = Omit<Teacher, "name" | "class">;

    const teacher: NewTeacher = {
        jobNUmber: 201207,
        subject: "Math"
    };
}

// 6.Record<Type, Keys>：创建一个由键类型 Keys 和值类型 Type 构成的对象类型
namespace f {
    type Fruit = "apple" | "banana" | "orange";
    type Price = number;

    type PriceList = Record<Fruit, Price>;

    const prices: PriceList = {
        apple: 10,
        banana: 8,
        orange: 5
    };
}

// 7.Exclude<UnionType, ExcludedMembers>：通过从 UnionType 中排除所有可分配给 ExcludedMembers 的联合成员来构造一个新的类型
namespace g {
    type Colors = "red" | "blue" | "green";
    type PrimaryColor = "red" | "blue";

    type SecondaryColors = Exclude<Colors, PrimaryColor>;   // 'green'

    type T0 = Exclude<"a" | "b" | "c", "a">;    // 'b' | 'c'
    type T1 = Exclude<"a" | "b" | "c", "a" | "b">;    // 'c'
    type T2 = Exclude<string | number | (() => void), Function>;    // string | number
}

// 8.Extract<Type, Union>：通过从 Type 中提取所有可赋值给 Union 的联合成员来构造一个新的类型
namespace h {
    type Pet = 'dog' | 'tortoise' | 'cat' | 'lizard';
    type Reptile = 'snake' | 'lizard';

    type Animal = Extract<Pet, Reptile>;    // 'lizard'

    type T2 = Extract<string | number | (() => void), Function>;    // (() => void)
}


