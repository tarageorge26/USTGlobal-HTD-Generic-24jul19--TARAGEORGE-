package com.dev.strings;

public class ReverseOfString {

	public void reverse(String s) {

		System.out.println("original string : "+s);
		String revS = "";
		for(int i=s.length()-1;i>=0;i--) {
			revS = revS + s.charAt(i);
		}
		System.out.println("reverse of string : "+revS);
	}

	public static void main(String[] args) {

		ReverseOfString s = new ReverseOfString();
		s.reverse("hello world");
	}

}
