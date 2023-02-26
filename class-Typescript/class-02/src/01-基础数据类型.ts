export default {}

// 数值类型  number
let money: number;

money = 222;
money = 333;
money = 444;

// money = '邱淑贞';
// money = false;

money = 0x000;  // 其他进制类的数字
money = 0o000;
money = 20;

// 布尔类型  boolean
let flag: boolean;

flag = true;
flag = false;

// flag = 222
// flag = '娃哈哈'

// 字符串类型 string
let msg: string;

msg = '这是一条消息'

// msg = 111
// msg = [1,2,3,4]

msg = `我今年的目标是月入${money}k`
console.log(msg);