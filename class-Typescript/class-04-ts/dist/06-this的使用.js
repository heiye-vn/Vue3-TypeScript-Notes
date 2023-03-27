"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
class Rectangle1 {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return () => {
            console.log(this);
            return this.width * this.height;
        };
    }
}
let rectangle1 = new Rectangle1(100, 200);
const area1 = rectangle1.getArea()();
console.log(area1);
class Rectangle2 {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return () => {
            console.log(this);
            return this.width * this.height;
        };
    }
}
let rectangle2 = new Rectangle2(50, 50);
const area2 = rectangle2.getArea()();
console.log(area2);
class Rectangle3 {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // 将 this 赋值为 void，禁止调用 this
    getArea() {
        return () => {
            console.log(this);
            // return this.width * this.height;        // Property 'width' does not exist on type 'void
            return 111;
        };
    }
}
