package com.dev.inheritance;

public class GrandFather {
	static GrandFather g = new GrandFather();
	String lastName = "Stark";
	String name = "Torrhen";

	public static void main(String[] args) {
		
		g.printname();
	}
	public void printname() {
		System.out.println(name+" " +g.lastName );
	}

}
