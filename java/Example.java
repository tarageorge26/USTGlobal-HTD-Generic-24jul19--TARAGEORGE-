public class Example{

public static void main(String[] args) {
	
	int a=10,b=20;
	boolean c;
	 c= !(((++a+b++) >= (a++ + ++b)) || ((--a+b--)==(a--+--b +(2&3))));
	 System.out.println(c);
}}