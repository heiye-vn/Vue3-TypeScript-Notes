export default {};

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
        // 使用箭头函数可以将当前上下文保存为this
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        };
    }
};

let cardPicker = poker.createCardPicker();
let pickedCard = cardPicker();
console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);
