package com.dev.methods;

public class ArithmaticOP {
	
	
	public void add(int a,int b,int c) {
		
		 int d=a+b+c;
		System.out.println("addition of 3 integers = "+d);
	}

   public void add(float a,float b) {
		
		float  d=a+b;
		System.out.println("addition of 2 float vales; = "+d);
	}
   public void add(int a,int b) {
		
		int d=a+b;
		System.out.println("addition of 3 integers = "+d);
	}

   
   

	public void sub(int a,int b) {
		
		int d=a-b;
		System.out.println("subtraction of 2 integers = "+d);
	}
	
	public void sub(float a,float b) {
		
		float d=a-b;
		System.out.println("subtraction of 2 float = "+d);
	}
	
	public void sub(int a,int b,int c) {
		
		int d=a-b-c;
		System.out.println("subtraction of 3 integers = "+d);
	}
	
	
   public void mul(int a,int b) {
		
		int d=a*b;
		System.out.println("mUltiplication of 2 ints = "+d);
	}
	
	public void mul(float a,float b) {
		
		float d=a*b;
		System.out.println("multiplication of 2 floats = "+d);
	}
	
	public void mul(int a,int b,int c) {
		
		int d=a*b*c;
		System.out.println("multiplication of 3 integers = "+d);
	}
	
	
   private void div(int a,int b) {
		
		int d=a/b;
		System.out.println("division of 2 integers = "+d);
	}
	
	public void div(float a,float b) {
		
		float d=a/b;
		System.out.println("division of 2 floats = "+d);
	}
	
	final public void div(int a,int b,int c) {
		
		int d=a/b/c;
		System.out.println("division of 3 integers = "+d);
	}
	
	/*
	 * private methods can be verloaded.
	 * final methods can be overloaded.
	 * static metho
	 */
	
	
	public static void main(String[] args) {
 
		ArithmaticOP a1= new ArithmaticOP();
		
		a1.add(10, 30,40);
		a1.sub(100,25);
		a1.mul(5.0f, 5.0f);
		a1.div(10, 2);
	}

}
