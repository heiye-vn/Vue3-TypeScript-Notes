"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let produceObj = {
    name: '云南白药',
    unit: '瓶',
    ptypeName: '以岭药业',
    price: 30,
    quantity: 10
};
function getValue(obj, keys) {
    // let valArr = [] as T[K][];
    //
    // keys.forEach(key=>{
    //     valArr.push(obj[key]);
    // })
    //
    // return valArr
    return keys.map(key => obj[key]);
}
console.log(getValue(produceObj, ['name', 'price', 'quantity']));
// console.log(getValue(produceObj, ["class"]));   // error
