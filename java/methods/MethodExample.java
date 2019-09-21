public class MethodExample{
	public static int calculateAreaOfSquare(int side){
		return side*side;
	}
	public static float calculateAreaOfCircle(int radius){
		return 3.142f*radius*radius;
	}
	public static float calculateAreaOfTriangle(int base,int height){
		return 0.5f*base*height;
	}
	public static float calculateAverageOfInteger(int a,int b,int c){
		return (a+b+c)/3;
	}
	public static void main(String[] args) {
		int s=10,r=5,base=5,height=7,a=10,b=20,c=30;
		System.out.println("area of square with side "+s+" = "+(calculateAreaOfSquare(s))); //methods are within the same class and hence method is invoked by just methodname;
		System.out.println("area of circle with radius "+r+" = "+(calculateAreaOfCircle(r)));
		System.out.println("area of triangle with base "+base+" and height "+height+" = "+(calculateAreaOfTriangle(base,height)));
		System.out.println("average of three integers "+a+", "+b+" and "+c+" = "+(calculateAverageOfInteger(a,b,c)));

	}
}