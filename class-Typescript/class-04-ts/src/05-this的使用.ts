export default {};

/*
*       this 的使用：
*
*       ts 中 this 有三种使用场景
*           1. this 参数：限制调用函数时的 this 类型
*               1-1：作为对象的方法调用
*               1-2：作为普通函数调用
*               1-3：作为构造器调用
*               1-4：作为 Function.prototype.call 和 Function.prototype.bind
*
*           2. this 类型：支持链式调用，尤其支持 class 继承的链式调用
*           3. ThisType：用于构造复杂的 factory 函数
* */

interface Card {
    suit: string;
    card: number;
}

interface Poker {
    suits: string[];
    cards: number[];

    createCardPicker(this: Poker): () => Card;
}

let poker: Poker = {
    suits: ["hearts", "spades", "diamonds", "clubs"],
    cards: Array(52),
    createCardPicker: function (this: Poker) {
        // 箭头函数中的this为当前运行时的上下文对象
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
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
// console.log(fn3());     //  Cannot read property 'name' of undefined

// 上述代码在 ts 编辑阶段没有报错，可以使用类型注解解决该问题，从而保证调用时 this 的类型安全
interface Obj4 {
    name: string;

    // 约束 getName 调用时 this 的类型
    getName(this: Obj4): string;
}

const obj4: Obj4 = {
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
function People(name: string) {
    this.name = name;
}

People.prototype.getName = function () {
    return this.name;
};
const people = new People("Theshy");

// console.log(people.getName());

// 类型标注
interface People {
    name: string;

    getName(): string;
}

interface PeopleConstructor {
    new(name: string): People;      // 声明可以作为构造函数调用

    prototype: People;      // 声明 prototype，支持后续修改 prototype
}

const ctor = (function (this: People, name: string) {
    this.name = name;
} as unknown) as PeopleConstructor;     // 类型不兼容，二次修改

ctor.prototype.getName = function () {
    return this.name;
};

const people2 = new ctor('looper')
console.log(people2);
console.log(people2.getName());
