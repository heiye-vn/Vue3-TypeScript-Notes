/*
*       方法装饰器（MethodDecorator）：对方法进行修饰，方法装饰器不能用于声明文件(.d.ts)、重载或其他上下文环境(如declare类中)
*
*       方法装饰器(MethodDecorator)函数接受三个参数：
*           - target：对静态成员来说是类的构造函数，对实例成员是类的原型对象
*           - propertyKey：成员名字，固定为 string 类型
*           - descriptor：成员的属性描述符
*
*       descriptor 中的属性包括：
*           - value：被装饰成员的原始值（例如：一个方法的函数体）
*           - writable：boolean类型，表示成员是否可写
*           - enumerable：boolean类型，表示成员是否可枚举（能否在对象可遍历属性中存在）
*           - configurable：boolean类型，表示成员是否可配置（是否可以使用 delete 操作符删除成员 ）
*           - get：如果成员是一个访问器属性（getter），则为该属性的获取方法
*           - set：如果成员时一个访问器属性（setter），则为该属性的设置方法
* */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var methodDecorator;
(function (methodDecorator) {
    function notEnumerable(target, propertyKey, descriptor) {
        descriptor.enumerable = false;
    }
    var Person = /** @class */ (function () {
        function Person(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        Person.prototype.sayHi = function () {
            return "Hello, my name is ".concat(this.name);
        };
        __decorate([
            notEnumerable
        ], Person.prototype, "sayHi", null);
        return Person;
    }());
    var person = new Person("Rose", 20, "女");
    for (var personKey in person) {
        // console.log(personKey, "---", person[personKey]);
    }
    function log(target, propertyKey, descriptor) {
        var originMethod = descriptor.value;
        // 重写被装饰的方法
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Calling ".concat(propertyKey, " width arguments: ").concat(args, " "));
            var result = originMethod.apply(this, args);
            console.log("Method ".concat(propertyKey, " returned: ").concat(result));
            return result;
        };
    }
    var ExampleClass = /** @class */ (function () {
        function ExampleClass() {
        }
        ExampleClass.prototype.greet = function (name, address) {
            return "\u4F60\u597D, \u6211\u662F".concat(name, ",\u6765\u81EA").concat(address);
        };
        __decorate([
            log
        ], ExampleClass.prototype, "greet", null);
        return ExampleClass;
    }());
    var p = new ExampleClass();
    p.greet('清漪', '补天教');
})(methodDecorator || (methodDecorator = {}));
