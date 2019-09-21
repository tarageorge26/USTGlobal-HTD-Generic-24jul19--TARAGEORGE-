namespace MathOperation{
    const pi =3.14;
   export function circum(radius : number){
        console.log('the circumference of the circle is'+2*pi*radius);
    }
     export function area(radius : number){
        console.log('the area of the circle is'+pi*radius*radius);
    }

}
MathOperation.circum(2);//accessing members of namespace
MathOperation.area(2);
