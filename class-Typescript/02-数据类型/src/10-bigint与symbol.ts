export default {};


// bigint：用于表示一个很大的整数

let oneHundred: bigint = BigInt(100);
console.log(oneHundred);

let oneHundred_: bigint = 100n;
console.log(oneHundred_);


// symbol：创建全局唯一引用

const firstName: symbol = Symbol('name');
const lastName: symbol = Symbol('name');

console.log(firstName);
console.log(lastName);
if(firstName === lastName){
    console.log('ok')
}