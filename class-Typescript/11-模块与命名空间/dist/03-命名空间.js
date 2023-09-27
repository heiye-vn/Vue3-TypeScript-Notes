/*
*       命名空间：是用来组织和管理代码的一种方式。它提供了一种将相关代码分组、隔离和导出的机制，避免了全局命名冲突的问题。
*
*       使用 namespace 关键字定义命名空间，可以在一个文件中定义多个命名空间，并且可以嵌套使用，命名空间中可以包含类、函数、接口和其他命名空间
* */
var Shapes;
(function (Shapes) {
    class Circle {
        constructor(name, radius) {
            this.name = name;
            this.radius = radius;
        }
        calculateArea() {
            return Math.PI * Math.pow(this.radius, 2);
        }
    }
    Shapes.Circle = Circle;
    class Rectangle {
        constructor(name, width, height) {
            this.name = name;
            this.width = width;
            this.height = height;
        }
        calculateArea() {
            return this.width * this.height;
        }
    }
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
const circle = new Shapes.Circle('circle', 2.5);
const circleArea = circle.calculateArea();
console.log(circleArea);
const rectangle = new Shapes.Rectangle('rectangle', 10, 8);
const rectangleArea = rectangle.calculateArea();
console.log(rectangleArea);
