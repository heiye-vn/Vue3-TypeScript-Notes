/*
*       装饰器：装饰器是一种函数(特殊类型的声明)，`@expression`，能够被附加到类声明、方法、属性、访问符或参数上，expression求值后必须为一个函数，
*             它会在运行时被调用，被装饰的声明信息作为参数传入
*
*       装饰器分为：类装饰器、方法装饰器、参数装饰器、属性装饰器、访问器装饰器。不同装饰器所接收的参数不同
*
*       装饰器执行顺序：
*           - 参数装饰器，然后依次是方法装饰器，存取器装饰器，或属性装饰器应用到每个实例成员；
*           - 参数装饰器，然后依次是方法装饰器，存取器装饰器，或属性装饰器应用到每个静态成员；
*           - 参数装饰器应用到构造函数；
*           - 类装饰器应用到类。
*
*       装饰器工厂：装饰器形式是无法手动传参的，需要手动传参就需要使用装饰器工厂，也是一个函数，返回一个装饰器，语法如下
*
*       function decoratorFactory(args){
*           return function (target) {
*               ...
*           }
*       }
*
*       多个装饰器工厂函数作用在一个对象上时，执行顺序遵循类似 "洋葱模型(工厂函数从外到内执行，装饰器函数从内到外执行)"
*
*       装饰器工厂返回值的类型为装饰器的类型，TS已提供以下内置装饰器类型：
*           - 类装饰器类型：ClassDecorator
*           - 方法装饰器类型：MethodDecorator
*           - 属性装饰器类型：PropertyDecorator
*           - 存取器装饰器类型：暂无
*           - 参数装饰器类型：ParameterDecorator
*
*       参考文档/文章：
*           https://ts.nodejs.cn/docs/handbook/decorators.html
*           https://3rcd.com/en/blog/ts-decorator/
*           https://juejin.cn/post/7103839957873065998
*           https://juejin.cn/post/7072265230356594724
* */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var decorator;
(function (decorator) {
    function logController(target) {
        // target: 装饰的目标对象
        console.log(target);
        console.log('log');
    }
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this._name = '张三';
            this._age = 20;
            this._name = name;
            this._age = age;
        }
        Person = __decorate([
            logController
        ], Person);
        return Person;
    }());
    var person = new Person('李四', 30);
    // 多个装饰器工厂函数执行顺序
    function first() {
        console.log('first(): factory evaluated');
        return function (target, propertyKey, descriptor) {
            console.log('first(): called');
        };
    }
    function second() {
        console.log('second(): factory evaluated');
        return function (target, propertyKey, descriptor) {
            console.log('second(): called');
        };
    }
    var ExampleClass = /** @class */ (function () {
        function ExampleClass() {
        }
        ExampleClass.prototype.method = function () {
        };
        __decorate([
            first(),
            second()
        ], ExampleClass.prototype, "method", null);
        return ExampleClass;
    }());
    // first(): factory evaluated
    // second(): factory evaluated
    // second(): called
    // first(): called
})(decorator || (decorator = {}));
