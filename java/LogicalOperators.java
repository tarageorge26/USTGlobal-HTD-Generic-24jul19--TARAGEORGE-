public class LogicalOperators{
	public static void main(String[] args) {
		boolean b=true;
		boolean c=false;

		boolean d= b&&c;
		System.out.println(d);
		d=b||c;
		System.out.println(d);
		System.out.println(!b);
		System.out.println(!c);

		//bitwise operators
		byte x=2;
		byte y=3;
		int c1;
		c1 =x&y;
		System.out.println(c1);
		c1=2|3;
		System.out.println(c1);

		//xor operation different bits give 1

		c1=1^3;
		System.out.println(c1);
	}
}