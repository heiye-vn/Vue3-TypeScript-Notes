export default {};

/*
*       枚举（enum）类型
*           使用 enum 关键字定义
*
*           用于取值被限定在一定范围内的场景
*
*           枚举成员默认会被赋值为从0开始递增的数字，同时也会对枚举值到枚举名进行反向映射
*
*           可以手动给枚举中的元素赋值，并且只能赋值数字(可以小数、负数)，当前枚举元素赋值后，后面的元素在没有手动赋值的情况下会依次递增（+1）
*
*           手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 tsc 无视类型检查
*
*           枚举元素的值可以重复，遵循 "后值覆盖前值" 原则
*
*           枚举项有两种类型：常数项、计算所得项（计算所得项的下一项必须赋初始值，否则为undefined）
*
*           根据枚举的定义，在使用时最好避免元素值覆盖、无法递增的情况
*
* */

enum Color {
    red = 1,
    orange ,
    yellow ,
    green ,
    blue,
    indigo = 'indigo'.length,
    purple = 8,
};

// 'indigo'.length 即为计算所得项

// console.log(Color);


// console.log(typeof Color)   // object

// console.log(Color.red);
// console.log(Color[0]);
// console.log( Color[0] === 'red' );
// console.log( Color['red'] === 100 );

enum Days { 'Sun' = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat };
// console.log(Days)

// console.log(Days[3]);
// console.log(Days['Sun']);
// console.log(Days['Wed']);
// console.log(Days['Sun'] === Days['Wen']);

enum Person {
    man = 0 ,
    women = <any>'women',
}

// console.log(Person)

// 常数枚举是使用 const enum 定义的枚举类型
const enum Directions {
    Up = 2*3,
    Down,
    Left,
    Right
};
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
console.log(directions);

// 外部枚举是使用 declare enum 定义的枚举类型






