export default {};

/*
*       条件类型
*           TS 中的条件类型就是在类型中添加分支，以支持更加灵活的泛型，满足更多的使用场景
*           TS 中内置条件类型是内部封装好的一些类型处理，可以直接使用
* */


namespace a {
    type Fish = { name1: string };

    type Water = { name2: string };

    type Bird = { name3: string };

    type Sky = { name4: string };

    type Condition<T> = T extends Fish ? Water : Sky;

    // 1. 在类型中添加条件分支
    let con1: Condition<Bird> = { name4: 'sky' };
    // console.log(con1);

    // 2. 条件类型分发
    let con2: Condition<Fish | Bird> = { name2: 'water' };
    // console.log(con2);
    let con3: Condition<Fish | Bird> = { name4: 'sky' };
    // console.log(con3);
    let con4: Condition<Fish | Bird> = { name2: 'water', name4: 'sky' };
    // console.log(con4);
}

namespace b {
    interface Fish {
        name1: string;
    }
    interface Water {
        name2: string;
    }
    interface Bird {
        name3: string;
    }
    interface Sky {
        name4: string;
    }

    // 3. 分布式条件分发
    // 剔除不包含 Fish 的部分
    // type Condition<T> = [T] extends [Fish] ? Water : Sky;
    // type Condition<T> = T[] extends Fish[] ? Water : Sky;
    type Condition<T> = { t: T } extends { t: Fish } ? Water : Sky;

    let con1: Condition<Fish | Bird> = { name4: 'water' };
    console.log(con1);
}

namespace c {
    // 找出 T 中不包含 U 的部分
    type Diff<T, U> = T extends U ? never : T;
    type Res1 = Diff<'name' | 'age' | 'quantity' | 'price', 'name' | 'quantity' | 'price'>;

    // 找出 T 中包含 U 的部分
    type Filter<T, U> = T extends U ? T : never;
    type Res2 = Filter<'name' | 'age' | 'quantity' | 'price', 'name' | 'quantity' | 'price'>;
}
