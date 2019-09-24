package com.dev.strings;

public class StringMethods {

	public static void main(String[] args) {
		
		String str="some string";
		String str1="Some string";
		
		int len=str.length();
		System.out.println("output of length() : "+len);
		
		char[] ch =str.toCharArray();
		System.out.println("output of toCharArray() : "+ch[10]);
		
		char c=str.charAt(7);
		System.out.println("output of charAt(7) : "+c);
		
		boolean b=str.equals(str1);
		System.out.println("output of equals(str1) : "+b);
		
		boolean b1=str.equalsIgnoreCase(str1);
		System.out.println("output of equalsIgnoreCase(str1) : "+b1);
		
		boolean b2=str.contains("str");
		System.out.println("output of contains('str') : "+b2);
		
		String s=str.replace('s', 'A');
		System.out.println("output of replace('s', 'A') : "+s);
		
		int i =str.indexOf('t');
		System.out.println("output of indexOf('t') : "+i); //returns -1 if the character is not present;
		
		str=str.toUpperCase();
		System.out.println("output of toUpperCase() ; "+str);
		
		str=str.toLowerCase();
		System.out.println("output of toLowerCase() ; "+str);
		
		
		
		
		

	}

}
