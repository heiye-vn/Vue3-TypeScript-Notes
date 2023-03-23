export default {};
/*
*       函数重载：函数名相同，而形参不同的多个函数（约束函数的传参格式）
*
* */


// 重载函数
function padding(all: number);
function padding(topAndBottom: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);

// 实现函数
function padding(a: number, b?: number, c?: number, d?: number) {
    if (b == undefined && c == undefined && d == undefined) {
        b = c = d = a;
    } else if (c == undefined && d == undefined) {
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

// console.log(padding(5));
// console.log(padding(1, 3));
// console.log(padding(10, 20, 30));       // No overload expects 3 arguments, but overloads do exist that expect either 2 or 4 arguments
// console.log(padding(10, 20, 30, 40));


// 重载
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: number, y: string): string;
function add(x: string, y: number): string;
// 实现
function add(a: any, b: any) {
    return a + b;
}

// console.log(add(1, 2));
// console.log(add("hello", "world"));
// console.log(add(222, "world"));
// console.log(add("你好", 11));


let suits = ["hearts", "spades", "diamonds", "clubs"];


function pickCards(x: { suit: string, card: number }[]): number;
function pickCards(x: number): { suit: string, card: number };
function pickCards(x): any {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    } else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return {suit: suits[pickedSuit], card: x % 13};
    }
}

let myDeck = [{suit: "diamonds", card: 2}, {suit: "spades", card: 4}, {suit: "hearts", card: 10}];

let pickedCard1 = myDeck[pickCards(myDeck)];
console.log(`card: ${pickedCard1.card} of ${pickedCard1.suit}`);


let pickedCard2 = pickCards(15);
console.log(pickedCard2);
console.log(`card: ${pickedCard2.card} of ${pickedCard2.suit}`);
