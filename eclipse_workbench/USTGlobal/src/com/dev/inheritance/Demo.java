package com.dev.inheritance;

import java.util.Scanner;

public class Demo {

	public static void main(String[] args) {
		
		int i=10;
		byte b= (byte) i;//casting
		int a=i;         
		GrandFather g = new Son(); //upcasting
		//Son s = (Son) new GrandFather();
		//we get exception hence we should first upcast and thendowncast
		GrandFather g1 = new Son(); //upcasting and then
		Son s1 = (Son) g1;   //downcasting
		
		
		//Scanner class
		
		Scanner sc = new Scanner(System.in);
		int i1;
		System.out.println("enter the number");
		i1=sc.nextInt();
		System.out.println(" i = "+i1);
		
	}

}
