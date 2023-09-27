"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
var ClassMinix;
(function (ClassMinix) {
    class MinixA {
        type = false;
        changeType() {
            this.type = !this.type;
        }
    }
    class MinixB {
        name = "张三";
        getName() {
            return this.name;
        }
    }
    class MinixC {
        type;
        changeType;
        name;
        getName;
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
