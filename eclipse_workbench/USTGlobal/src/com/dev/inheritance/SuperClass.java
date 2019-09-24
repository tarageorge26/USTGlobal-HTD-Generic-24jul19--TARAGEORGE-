package com.dev.inheritance;

public class SuperClass {
	
	public SuperClass() {
		System.out.println("const with no arguement of superclass");
	}
	public SuperClass(int i) {
		System.out.println("const with int arguement of superclass");
	}
	public SuperClass(String str) {
		System.out.println("const with string arguement of superclass");
	}
	public SuperClass(String s,int i) {
		System.out.println("const with string,int arguement of superclass");
	}
	public SuperClass(int i,String s) {
		System.out.println("const with int,string arguement of superclass");
	}

	public static void main(String[] args) {
		

	}

}
