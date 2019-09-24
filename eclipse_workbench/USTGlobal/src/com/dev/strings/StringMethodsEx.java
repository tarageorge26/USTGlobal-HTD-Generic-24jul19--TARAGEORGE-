package com.dev.strings;

public class StringMethodsEx {

	public static void main(String[] args) {

		String str = "it is a pleasant evening";
		String str1 = "It is a pleasant evening";

		int len = str.length();
		System.out.println("output of length() : " +len);

		char[] ch = str.toCharArray();
		System.out.println("output of toCharArray() : " +ch[10]);

		char c = str.charAt(22);
		System.out.println("output of charAt() : " +c);

		boolean b = str.equals(str1);
		System.out.println("output of equals() : " +b);

		boolean b1 = str.equalsIgnoreCase(str1);
		System.out.println("output of equalsIgnoreCase() : " +b1);
		
		
		boolean b2=str.contains("sant");
		System.out.println("output of contains('sant') : "+b2);
		
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
