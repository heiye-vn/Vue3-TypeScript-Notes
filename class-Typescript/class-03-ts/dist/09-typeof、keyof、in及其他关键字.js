"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// typeof：获取值的类型
const obj1 = { a: 1 };
// typeof、keyof、in 的结合用法
const obj6 = { name: "二傻子", weight: "70kg", height: "165cm", age: 40 };
// typeof ArrayInstance[number]: 从常量值数组中获取对应元素字面量类型
const arr = ["m", "n"]; //  readonly ["m", "n"]
const PAYMENT_MODE = ["Ailpay", "Wxpay", "Paypal"]; //  readonly ["Ailpay", "Wxpay", "Paypal"]
function getPaymentMode(payMode) {
    return PAYMENT_MODE.find(item => item == payMode);
}
getPaymentMode('Ailpay'); // Ailpay
getPaymentMode('Wxpay'); // Wxpay
getPaymentMode('Paypal'); // Paypal
