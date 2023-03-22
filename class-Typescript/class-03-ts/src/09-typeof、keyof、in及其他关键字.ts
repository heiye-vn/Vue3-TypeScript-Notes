export default {};

// typeof：获取值的类型
const obj1 = {a: 1};
type Foo = typeof obj1;      // { a: number }


// keyof: 获取对象类型的 key
type Obj2 = { name: string; age: number; sex: number };
type Foo2 = keyof Obj2;     // "name" | "age" | "sex"

interface Obj3 {
    width: number;
    height: number;
    color: string;
}

type Foo3 = keyof Obj3;     // "width" | "height" | "color"


// in: 根据 key 创建对象类型
type Obj4 = { [k in "a" | "b" | "c"]: string };     // { a: string; b: string; c: string }


// 获取某个类型中某个 key 的类型
type Obj5 = { a: string; b: string };
type Foo4 = Obj5["a"];      // string



// typeof、keyof、in 的结合用法
const obj6 = {name: "二傻子", weight: "70kg", height: "165cm", age: 40};
type Foo5 = keyof typeof obj6;      // "name" | "weight" | "age" | "height"



// typeof ArrayInstance[number]: 从常量值数组中获取对应元素字面量类型
const arr = ["m", "n"] as const;    //  readonly ["m", "n"]
type Foo6 = (typeof arr)[number];    // "m" | "n"

const PAYMENT_MODE = ["Ailpay", "Wxpay", "Paypal"] as const;    //  readonly ["Ailpay", "Wxpay", "Paypal"]
type mode = typeof PAYMENT_MODE[number];    // "Ailpay" | "Wxpay" | "Paypal"
type mode1 = keyof typeof PAYMENT_MODE;

function getPaymentMode(payMode: mode) {
    return PAYMENT_MODE.find(item => item == payMode);
}

getPaymentMode('Ailpay');       // Ailpay
getPaymentMode('Wxpay');        // Wxpay
getPaymentMode('Paypal');       // Paypal
// getPaymentMode("unknown");           // Argument of type '"unknown"' is not assignable to parameter of type '"Ailpay" | "Wxpay" | "Paypal"


type Obj7 = { x: string; y: number; };
type Foo7 = { [T in keyof Obj7]: Obj7[T] };      // {x: string, y: number}



// extends：可以作为接口，类之间的继承，也可以用于两个类型之间的兼容性判断
type FOO8<T> = T extends string ? number : boolean;     // 如果 T 类型是 string 的兼容类型，就返回 number 类型，不是就返回 boolean 类型

