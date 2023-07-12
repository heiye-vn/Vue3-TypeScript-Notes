export default {}

/*
*       单向兼容性
*            A 兼容 B，B 不一定兼容 A
* */

interface IName {
    name: string;
}

let n1 = { name: '大红' };
let n2 = { name: '二秃子', age: 777 };
let n3 = { name: '三黑', color: 'black' };

let val: IName;

val = n1;

// val = n3;
// n3 = val;   // Property 'color' is missing in type 'IName' but required in type '{ name: string; color: string; }'

// console.log(val)

// console.log(n3);


interface Animal {
    name: string;
    trait: {
        color: string;
    }
}

let t1 = { name: '111', trait: { color: 'red' } };
let t2 = { name: '222', trait: { color: 'red', age: 20 } };
let t3 = { name: '333', trait: { code: 333 } };

let animal: Animal = t2;

console.log(animal);
