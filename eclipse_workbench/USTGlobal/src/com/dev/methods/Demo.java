package com.dev.methods;

import dev.com.encapsulation.Dog;

public final class Demo {
	
//	Dog d = new Dog(); //creation using import
//	com.dev.arrays.Dog d1 = new com.dev.arrays.Dog();  //creation using fully qualified name
	
	final static int A=10;
	
	final static void print() {
		
		System.out.println("i am print() of Demo class");
	}
	public static void main(String[] args) {
		
		System.out.println(A);
		//A=11; //final members cannot be re initialised;//variable name of final variable is giben in block letters;
		
	}

}
