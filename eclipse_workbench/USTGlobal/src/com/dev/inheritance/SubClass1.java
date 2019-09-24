package com.dev.inheritance;

public class SubClass1 extends SuperClass1{
	
	@Override
	public void printMsg() { 
	//private members cannot be overriden,finals methods can be inherited but cannot be changed.
	//static members cannot be overriden,but two static methods can be present with same name.They are independent of each other.
		
		System.out.println("i am child method overriding parent method");
	}


	public static void main(String[] args) {
		SubClass1 s1= new SubClass1();
		s1.printMsg();

	}

}
