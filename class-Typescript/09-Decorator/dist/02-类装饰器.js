/*
*       类装饰器
*           作用于声明的类上，用来监视、修改或替换类定义
*           类装饰器的参数有且只有一个，即 target（类的构造器函数）
* */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classDecorator;
(function (classDecorator) {
    function sealed(target) {
        // console.log(target)
        // console.log(target.prototype)
    }
    var BugReport = /** @class */ (function () {
        function BugReport(t) {
            this.type = 'report';
            this.title = t;
        }
        BugReport = __decorate([
            sealed
        ], BugReport);
        return BugReport;
    }());
    var addSex = function (target) {
        target.prototype.sex = '男';
    };
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person = __decorate([
            addSex
        ], Person);
        return Person;
    }());
    var person = new Person('李四', 20);
    console.log(person.sex);
    // 使用装饰器工厂添加属性， 返回一个类装饰器类型的函数
    var addSex_ = function (value) {
        return function (target) {
            console.log(target);
            target.prototype.sex = value;
        };
    };
    var Person_ = /** @class */ (function () {
        function Person_() {
        }
        Person_ = __decorate([
            addSex_('女')
        ], Person_);
        return Person_;
    }());
    var person_ = new Person_();
    console.log(person_.sex);
})(classDecorator || (classDecorator = {}));
