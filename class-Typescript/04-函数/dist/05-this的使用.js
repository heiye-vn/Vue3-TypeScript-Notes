"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let poker = {
    suits: ["hearts", "spades", "diamonds", "clubs"],
    cards: Array(52),
    createCardPicker: function () {
        // 箭头函数中的this为当前运行时的上下文对象
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
let cardPicker = poker.createCardPicker();
let pickedCard = cardPicker();
// console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);
/*
*       this 作为对象方法调用
*           当函数作为对象的方法调用时，this 指向该对象（大多数使用场景）
* */
const obj = {
    name: "小明",
    getName() {
        return this.name;
    }
};
obj.getName();
const obj2 = {
    name: "小虎",
    getName: () => {
        // return  this.name   // check 报错，这里的this指向的是window
    }
};
/*
*       普通函数调用
*           即使通过非箭头函数的调用，如果把该函数赋值给变量，在调用时 this 指向的是全局对象 window
* */
const obj3 = {
    name: "小狗",
    getName() {
        console.log(this);
        return this.name;
    }
};
let fn3 = obj3.getName;
const obj4 = {
    name: "小李",
    getName() {
        return this.name;
    }
};
obj4.getName();
let fn4 = obj4.getName;
// fn4()   // void类型的this上下文不能赋值给Obj4类型的this方法
/*
*       构造器调用
*           在 Class 出现之前，一直把 function 当做构造函数使用，当通过 new 调用 function 时，构造函数里的 this就指向该对象
* */
function People(name) {
    this.name = name;
}
People.prototype.getName = function () {
    return this.name;
};
const people = new People("Theshy");
const ctor = function (name) {
    this.name = name;
}; // 类型不兼容，二次修改
ctor.prototype.getName = function () {
    return this.name;
};
const people2 = new ctor('looper');
console.log(people2);
console.log(people2.getName());
