package com.dev.inheritance;

public class Parent {
	
	public Parent() {
		System.out.println("parent constructor with no arguement of superclass");
	}
	public Parent(int i) {
		System.out.println("parent constructor with int arguement of superclass");
	}
	public Parent(String str) {
		System.out.println("parent constructor with string arguement of superclass");
	}
	public Parent(String str,int i) {
		System.out.println("parent constructor with string,int arguement of superclass");
	}
	public Parent(int i,String str) {
		System.out.println("parent constructor with int,string arguement of superclass");
	}

	public static void main(String[] args) {
		
	}

}
