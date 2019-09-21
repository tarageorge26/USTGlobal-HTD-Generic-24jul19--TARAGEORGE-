var MathOperation;
(function (MathOperation) {
    var pi = 3.14;
    function circum(radius) {
        console.log('the circumference of the circle is' + 2 * pi * radius);
    }
    MathOperation.circum = circum;
    function area(radius) {
        console.log('the area of the circle is' + pi * radius * radius);
    }
    MathOperation.area = area;
})(MathOperation || (MathOperation = {}));
MathOperation.circum(2); //accessing members of namespace
MathOperation.area(2);
var MathOperation;
(function (MathOperation) {
    var rectangle;
    (function (rectangle) {
        function perimeter(length, breadth) {
            console.log('the perimeter of the circle is' + length * breadth);
        }
        rectangle.perimeter = perimeter;
        //  export function area(radius : number){
        //     console.log('the area of the circle is'+pi*radius*radius);
        // }
    })(rectangle = MathOperation.rectangle || (MathOperation.rectangle = {}));
})(MathOperation || (MathOperation = {}));
MathOperation.rectangle.perimeter(2, 3); //accessing nested namespace member
/// <reference path="./circle.ts" /> 
/// <reference path="./rectangle.ts" />
MathOperation.circum(2);
MathOperation.rectangle.perimeter(2, 3);
