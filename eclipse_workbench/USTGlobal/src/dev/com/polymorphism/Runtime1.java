package dev.com.polymorphism;

public class Runtime1 extends Runtime {

	@Override
	public void printMsg() { 
			
		System.out.println("i am child method overriding parent method\n");
		System.out.println("i am performing multiplication of two integers");
		int c=10*10;
		System.out.println("result 10*10 = "+c);
	}


	public static void main(String[] args) {
		Runtime1 r1= new Runtime1();
		r1.printMsg();

	}

}