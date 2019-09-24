package com.dev.arrays;

import java.util.Arrays;

public class ReverseArray {

	public void reverse(int[] a) {
		//using another array
		int[] revA= new int[10];
		int k=0;
		System.out.println("original array elements are");
		for(int i=0;i<=a.length-1;i++) {
			System.out.print(a[i]+" ");
		}
		System.out.println();
		for(int i=a.length-1;i>=0;i--) {
			revA[k]= a[i];
			k++;
		}
		System.out.println("Reversed array elements are");
		for(int i=0;i<=a.length-1;i++) {
			System.out.print(revA[i]+" ");
		}
		System.out.println();
		
		//without using another array
		 for(int i = 0; i < a.length / 2; i++)
		  {
		    int temp = a[i];
		    a[i] = a[a.length - i - 1];
		   a[a.length - i - 1] = temp;
		  }
		    System.out.println("Reverse array : "+Arrays.toString(a));
	}

	public static void main(String[] args) {

		ReverseArray ra = new ReverseArray();		
		int[] a = {10,20,30,40,50,60,70};
		ra.reverse(a);
	}
}
