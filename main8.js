// 類別實現介面
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
console.log(new Circle("alex", 555));
// 泛型函數
function identity(arg) {
    return arg;
}
