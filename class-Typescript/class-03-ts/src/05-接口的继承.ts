export default {};

/*
*       接口的继承
*           我们知道在JavaScript中 Class 类之间可以互相继承。和类一样，接口之间也可以互相继承，让我们能够从一个接口里复制成员到另一个接口里，可以将更灵活的将接口分割到可重用的模块里
*           接口具备可扩展性，使用 extends 关键字来实现接口的继承，从而对接口进行扩展，一个接口可以继承多个接口
*
*       继承（extends）的使用场景：
*           1. 类(class)之间可以继承
*           2. 接口(interface)之间可以继承
*           3. 类型别名(type)之间可以继承，只是类型别名之间继承的写法和前面两个有区别，使用 & 符号
* */

interface Animal {
    name: string;

    eat(arg: string): void;
}

interface Mouse extends Animal {
    color: string;
}

let jerry: Mouse = {
    name: "杰瑞",
    color: "orange",
    eat(food: string) {
        console.log(`老鼠爱吃${food}`);
    }
};
// console.log(jerry);
// jerry.eat("大米");



