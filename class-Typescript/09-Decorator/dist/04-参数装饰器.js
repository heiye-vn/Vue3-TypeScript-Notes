/*
*       参数装饰器（ParameterDecorator）：参数装饰器作用于构造函数或方法的参数声明上，不可用于声明文件（.d.ts），
*       重载或其他上下文环境（declare类）
*
*       参数装饰器(ParameterDecorator)函数接受三个参数：
*           - target：对静态成员来说是类的构造函数，对实例成员是类的原型对象
*           - propertyKey：成员名字，固定为 string 类型
*           - paramIndex：函数参数列表中参数索引
* */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var parameterDecorator;
(function (parameterDecorator) {
    var paramLog = function (target, propertyKey, paramIndex) {
        console.log(target);
        console.log(propertyKey);
        console.log(paramIndex);
    };
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.setAttr = function (newName, newAge) {
            this.name = newName;
            this.age = newAge;
        };
        __decorate([
            __param(1, paramLog)
        ], Person.prototype, "setAttr", null);
        Person = __decorate([
            __param(0, paramLog)
        ], Person);
        return Person;
    }());
    var person = new Person('石昊', 18);
    person.setAttr('秦昊', 10);
    console.log(person);
})(parameterDecorator || (parameterDecorator = {}));
