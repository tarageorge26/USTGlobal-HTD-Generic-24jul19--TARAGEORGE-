package com.dev.methods;

public class MethodOverloading {
	
	static MethodOverloading m1 = new MethodOverloading();
	
	public void print() {
		
		System.out.println("this is print method with no Argument");
	}

	public int print(int i) {
		
		System.out.println("this is print method with int Argument");
		return 1;
	}
	
	static String print(String str) {
		System.out.println("this is print method with string arg");
		return "a";
	}

	public static void main(String[] args) {
		m1.print();

	}

}
