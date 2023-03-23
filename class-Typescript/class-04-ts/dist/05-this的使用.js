"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let poker = {
    suits: ["hearts", "spades", "diamonds", "clubs"],
    cards: Array(52),
    createCardPicker: function () {
        // 使用箭头函数可以将当前上下文保存为this
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
let cardPicker = poker.createCardPicker();
let pickedCard = cardPicker();
console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);
