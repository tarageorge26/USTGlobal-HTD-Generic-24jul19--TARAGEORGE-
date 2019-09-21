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
