export default {}

// 根据初始值推导，没初始值则无法进行类型推导，默认为 any 类型
let name = '石昊';
name = '荒天帝';
// name = 777;     // Type 'number' is not assignable to type 'string'

console.log(name);

let user;
user = '火灵儿';
user = {
    name: '采桑女',
    address: '火州'
}

console.log(user);

// null 和 undefined 是其他类型的子类型(非严格模式)
let arr = [undefined, 111]

function sayHi(name){
    console.log('Hello ' + name)
}

sayHi('Bob');


