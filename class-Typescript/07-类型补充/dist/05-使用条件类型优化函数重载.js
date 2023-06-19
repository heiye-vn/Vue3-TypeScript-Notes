"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
console.log("======函数重载======");
var a;
(function (a_1) {
    function add(x, y) {
        return x + y;
    }
    console.log(add(10, 2));
    console.log(add("hello", " world"));
    let a;
    let b;
    // add(a, b)    // error
})(a || (a = {}));
console.log("======使用泛型解决(存在问题)======");
var b;
(function (b_1) {
    function add(x, y) {
        return x + y;
    }
    const a = 10;
    const b = "str";
    console.log(add(a, a));
    console.log(add(b, b));
    // console.log(add(a, b)); // error: Argument of type 'string' is not assignable to parameter of type 'number'
    add(1, 2); // //function add<1 | 2>(a: 1 | 2, b: 1 | 2): 1 | 2
    add(6, 6);
    add('aaa', 'ccc');
})(b || (b = {}));
console.log("======使用条件类型======");
var c;
(function (c) {
    function add(a, b) {
        return a + b;
    }
    const param1 = 10;
    const param2 = "str";
    console.log(add(param1, param1));
    console.log(add(param2, param2));
    add(1, 2);
    add('hello', ' world');
})(c || (c = {}));
