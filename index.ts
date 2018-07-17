//declaring class for Rectangle
class Rectangle{
    length: number;
    breadth: number;
//constructor for initialization
    constructor(lenght: number, breadth: number) {
        this.length = lenght;
        this.breadth = breadth;
    }
//returning the result
    calculateArea(): number{
        return (this.length * this.breadth);
    }
}
var obj = new Rectangle(12, 20);
console.log(obj.calculateArea());
