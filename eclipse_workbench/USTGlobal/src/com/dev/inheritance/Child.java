package com.dev.inheritance;

public class Child extends Parent {
	
	
	public Child() {
		//super(); super with zero argument is invoked implicitly by compiler its seen only when it written by programmer
	}
	public Child(int i) {
		super(i);
	}
	public Child(String str) {
		super(str);
	}
	public Child(String str,int i) {
		super(str,i);
	}
	public Child(int i,String str) {
		super(i,str);
	}

	public static void main(String[] args) {
	
		Child c = new Child();
		Child c1 = new Child(10);
		Child c2 = new Child("abc");
		Child c3 = new Child("abc",10);
		Child c4 = new Child(10,"abc");
		
	}

}
