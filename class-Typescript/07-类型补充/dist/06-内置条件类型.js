"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
var d;
(function (d) {
    class Person {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getName() {
            console.log(this.name);
        }
    }
    let person = {
        name: "石昊",
        age: 15,
        getName() {
            console.log(this.name);
        }
    };
    person.getName();
})(d || (d = {}));
