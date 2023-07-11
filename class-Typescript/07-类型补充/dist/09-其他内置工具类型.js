"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 1.Required<Type>：将类型 Type 中的所有属性设置为必选属性（去掉 ? 标记）
var a;
(function (a) {
    const person = {
        name: "二毛",
        age: 30
        // 此处必须包含 name 和 age 属性
    };
})(a || (a = {}));
// 2.Partial<Type>：将类型 Type 中的所有属性设置为可选（添加 ? 标记）
var b;
(function (b) {
    const todo = {
        title: "eat",
        desc: "吃饭"
        // 属性 title 和 desc 均可选
    };
})(b || (b = {}));
// 3.Readonly<Type>：将类型 Type 中的所有属性设置为只读（添加 readOnly 标记）
var c;
(function (c) {
    const goods = {
        id: 20135648977898,
        name: "云南白药"
    };
    // goods.name = '阿莫西林';    // Cannot assign to 'name' because it is a read-only property
})(c || (c = {}));
// 4.Pick<Type, Keys>：从类型 Type 中选区指定属性 Keys 的子集并返回一个新类型，Keys 不能为空
var d;
(function (d) {
    // type NewPerson = Readonly<Pick<Person, 'name' | 'age'>>;
    const person = {
        name: "乌兹",
        age: 20
    };
    person.name = "uzi";
})(d || (d = {}));
// 5.Omit<Type, Keys>：从类型 Type 中删除指定属性 Keys，并返回一个新类型，Keys 可以为空，表示不删除属性
var e;
(function (e) {
    const teacher = {
        jobNUmber: 201207,
        subject: "Math"
    };
})(e || (e = {}));
// 6.Record<Type, Keys>：创建一个由键类型 Keys 和值类型 Type 构成的对象类型
var f;
(function (f) {
    const prices = {
        apple: 10,
        banana: 8,
        orange: 5
    };
})(f || (f = {}));
