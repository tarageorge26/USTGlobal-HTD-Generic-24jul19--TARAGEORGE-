var MathOperation1;
(function (MathOperation1) {
    var rectangle;
    (function (rectangle) {
        function perimeter(length, breadth) {
            console.log('the perimeter of the circle is' + length * breadth);
        }
        rectangle.perimeter = perimeter;
        //  export function area(radius : number){
        //     console.log('the area of the circle is'+pi*radius*radius);
        // }
    })(rectangle = MathOperation1.rectangle || (MathOperation1.rectangle = {}));
})(MathOperation1 || (MathOperation1 = {}));
MathOperation1.rectangle.perimeter(2, 3); //accessing nested namespace member
