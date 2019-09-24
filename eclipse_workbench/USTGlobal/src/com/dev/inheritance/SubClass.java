package com.dev.inheritance;

public class SubClass extends SuperClass {
	
	public SubClass() {
		super("abc"); //calling overloaded super class constructors
	}

	public static void main(String[] args) {
	 
		SubClass s= new SubClass();

	}

}
