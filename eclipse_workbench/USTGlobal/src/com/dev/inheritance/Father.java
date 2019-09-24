package com.dev.inheritance;

public class Father extends GrandFather {

	static Father f = new Father();
	String name = "Eddard"; // when removed the son will take name from grandfather(supermost class)

	@Override
	public void printname() {
		System.out.println(name + " " + super.name + " " + f.lastName);
		super.printname();// invokes grandfather
	}

	public static void main(String[] args) {
		f.printname();

	}

}
 