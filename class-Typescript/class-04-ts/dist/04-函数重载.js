"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 实现函数
function padding(a, b, c, d) {
    if (b == undefined && c == undefined && d == undefined) {
        b = c = d = a;
    }
    else if (c == undefined && d == undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}
// 实现
function add(a, b) {
    return a + b;
}
// console.log(add(1, 2));
// console.log(add("hello", "world"));
// console.log(add(222, "world"));
// console.log(add("你好", 11));
let suits = ["hearts", "spades", "diamonds", "clubs"];
function pickCards(x) {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 4 }, { suit: "hearts", card: 10 }];
let pickedCard1 = myDeck[pickCards(myDeck)];
console.log(`card: ${pickedCard1.card} of ${pickedCard1.suit}`);
let pickedCard2 = pickCards(15);
console.log(pickedCard2);
console.log(`card: ${pickedCard2.card} of ${pickedCard2.suit}`);
