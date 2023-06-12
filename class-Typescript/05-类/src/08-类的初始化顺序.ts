export default {};

/*
*   类的初始化顺序：
*       1. 基类的成员初始化
*       2. 基类的构造函数初始化
*       3. 子类的成员初始化
*       4. 子类的构造函数初始化
*
*/

class Base {
    name: string =  'Base';
    constructor(){
        console.log('My name is ' + this.name);
    }
}

class Derived extends Base {
    name: string = 'derived';
    constructor() {
        super();
        console.log('My name is ' + this.name);
    }
}

let derived = new Derived();
// console.log(Base.name)
