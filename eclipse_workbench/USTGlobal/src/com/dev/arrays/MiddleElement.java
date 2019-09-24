package com.dev.arrays;

public class MiddleElement {

	public static void main(String[] args) {
		int[] arr = { 10, 20, 30, 40, 50, 60 };
		int mid = (arr.length - 1) / 2;
		System.out.println("array elements are");
		for(int i=0;i<arr.length;i++)
		System.out.print(arr[i]+" ");
		System.out.println();
		
		System.out.println("middle element in the array list is " + arr[mid]);

	}

}
