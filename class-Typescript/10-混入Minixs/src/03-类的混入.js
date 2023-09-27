"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
var ClassMinix;
(function (ClassMinix) {
    class MinixA {
        constructor() {
            this.type = false;
        }
        changeType() {
            this.type = !this.type;
        }
    }
    class MinixB {
        constructor() {
            this.name = "张三";
        }
        getName() {
            return this.name;
        }
    }
    class MinixC {
    }
    function MinixFunc(curCls, itemCls) {
        itemCls.forEach(item => {
            console.log(item);
            Object.getOwnPropertyNames(item).forEach(name => {
                console.log(name, "---name");
                curCls.prototype[name] = item.prototype[name];
            });
        });
    }
    MinixFunc(MinixC, [MinixA, MinixB]);
    let testMinix = new MinixC();
    console.log(testMinix);
    testMinix.changeType();
})(ClassMinix || (ClassMinix = {}));
