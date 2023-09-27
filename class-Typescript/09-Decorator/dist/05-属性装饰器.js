/*
*       属性装饰器（PropertyDecorator）：参数装饰器作用于类属性上，不可用于声明文件（.d.ts），
*       重载或其他上下文环境（declare类）
*
*       属性装饰器(PropertyDecorator)函数接受两个参数：
*           - target：对静态成员来说是类的构造函数，对实例成员是类的原型对象
*           - propertyKey：成员名字，固定为 string 类型
* */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var propertyDecorator;
(function (propertyDecorator) {
    function propLog(target, propertyKey) {
        console.log(target);
        console.log(propertyKey);
    }
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        __decorate([
            propLog
        ], Person.prototype, "name", void 0);
        return Person;
    }());
    var person = new Person('石昊', 18);
})(propertyDecorator || (propertyDecorator = {}));
