export default {};


interface Ikey {
    [key: string]: any;
}

function getValue(obj: Ikey, key: string): any {
    return obj[key];
}

let data = {name: '陈憨憨', age: 23};

let val1 = getValue(data, 'name');
// console.log(val1);

let val2 = getValue(data, 'sex');
// console.log(val2);      // undefined，获取对象上不存在的key时，value为：undefined


// 使用泛型约束参数的取值范围
function getValue_<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let data_ = {ptypeName: '云南白药', ptypeCode: '001', quantity: 30, price: 25};

// Argument of type '"sex"' is not assignable to parameter of type '"ptypeName" | "ptypeCode" | "quantity" | "price"'
// console.log( getValue_(data_, 'sex') );

console.log(`商品名称为：${getValue_(data_, 'ptypeName')}`);

console.log(`商品价格为：￥${getValue_(data_, 'price')}`);