//declaring class for Rectangle
var Rectangle = /** @class */ (function () {
    //constructor for initialization
    function Rectangle(lenght, breadth) {
        this.length = lenght;
        this.breadth = breadth;
    }
    //returning the result
    Rectangle.prototype.calculateArea = function () {
        return (this.length * this.breadth);
    };
    return Rectangle;
}());
var obj = new Rectangle(12, 20);
console.log(obj.calculateArea());
