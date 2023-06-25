"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
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
var a;
(function (a) {
    let obj1 = {
        attr1: true,
        attr2: false
    };
    let obj2 = {
        attr1: "hello",
        attr2: 666
    };
    let obj3 = {
        attr1: "person",
        attr2: 999
    };
    // console.log(obj3);
})(a || (a = {}));
var b;
(function (b) {
    let person = {
        getName: () => {
            return "zhangsan";
        },
        getAge: () => {
            return 20;
        },
        getGender: () => {
            return "hello";
        }
    };
    console.log(person.getName());
})(b || (b = {}));
