package dev.com.polymorphism;

public class Complietime {
	
	public void print() {
		System.out.println("i am simple print method with no argument\n");
	}
	
	public void print(int a) {
		System.out.println("i am print method with int argument");
		System.out.println("the value is = "+a+"\n");
	}
	
	public void print(String str) {
		System.out.println("i am print method with string  argument");
		System.out.println("the value is = "+str+"\n");
	}
	public void print(float f) {
		System.out.println("i am print method with float argument");
		System.out.println("the value is = "+f+"\n");
	}
 
	public void print(int i,float f) {
		System.out.println("i am print method with int,float argument");
		System.out.println("the value of int is = "+i+" and value of float is = "+f+"\n");
	}

	public static void main(String[] args) {
		
		Complietime c = new Complietime();
		c.print();
		c.print(10);
		c.print(20.0f);
		c.print("hello good morning");
		c.print(50, 55.5f);
	}

}
