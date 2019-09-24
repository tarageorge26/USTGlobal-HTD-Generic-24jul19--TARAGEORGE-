package com.dev.methods;

public class MethodExample {
	public static int calcArea(int side) {
		return side*side;
	}

	public static void main(String[] args) {
		int side=10;
		System.out.println("Area of a square with side "+side+" = "+(calcArea(side)));

	}

}
