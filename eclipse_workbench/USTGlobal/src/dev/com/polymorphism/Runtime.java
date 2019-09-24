package dev.com.polymorphism;

public class Runtime {

	public void printMsg() {
		int c;
		System.out.println("i am parent method performing addition of 2 integers");
		c=10+10;
		System.out.println("result 10+10 = "+c);
	}

	public static void main(String[] args) {
	
		Runtime r =  new Runtime();
        r.printMsg();
	}

}
