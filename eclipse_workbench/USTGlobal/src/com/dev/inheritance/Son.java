package com.dev.inheritance;

public class Son extends Father{
	
	static Son s= new Son();
	String name="Robb";
	
	@Override
		public void printname() { //if there is no method inside super class it access from the supermost class
		System.out.println(name+" "+super.name+" "+s.lastName);
		super.printname(); //invoke father class method
	}


	public static void main(String[] args) {
		
       s.printname();
	}

}
