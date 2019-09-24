package dev.com.exceptions;

public class ExceptionExample {

	public static void main(String[] args) {
		System.out.println("print stmt before");
		t();
		System.out.println("print stmt after");
	}
	
	public static void s() {
		StringBuffer sb = new StringBuffer(-1);
	}
	
	public static void t() {
	s();
	}

}
