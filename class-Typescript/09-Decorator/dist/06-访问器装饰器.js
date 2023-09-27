/*
*       访问器装饰器：参数装饰器作用于访问器（getter/setter）上，不可用于声明文件（.d.ts），
*       重载或其他上下文环境（declare类）
*
*       访问器装饰器()函数接受三个参数：
*           - target：对静态成员来说是类的构造函数，对实例成员是类的原型对象
*           - propertyKey：成员名字，固定为 string 类型
*           - descriptor：成员的属性描述符
* */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var getsetDecorator;
(function (getsetDecorator) {
    function getsetLog(target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    }
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this._name = name;
            this._age = age;
        }
        // TypeScript不允许同时装饰一个成员的get和set访问器，否则会报错
        Person.prototype.get = function () {
            return this._name;
        };
        // @getsetLog
        Person.prototype.set = function (newName) {
            this._name = newName;
        };
        __decorate([
            getsetLog
        ], Person.prototype, "get", null);
        return Person;
    }());
    var person = new Person("石昊", 18);
})(getsetDecorator || (getsetDecorator = {}));
