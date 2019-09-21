namespace MathOperation1{
  export  namespace rectangle{

        export function perimeter(length : number, breadth: number){
            console.log('the perimeter of the circle is'+ length*breadth);
        }
        //  export function area(radius : number){
        //     console.log('the area of the circle is'+pi*radius*radius);
        // }
    
    }
}

MathOperation1.rectangle.perimeter(2,3);//accessing nested namespace member