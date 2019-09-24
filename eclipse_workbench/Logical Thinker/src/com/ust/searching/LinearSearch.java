package com.ust.searching;

import java.util.Scanner;

public class LinearSearch {

	public static void main(String[] args) {
		int arr[]= {10,460,48,56,34,67};
		Scanner s = new Scanner(System.in);
		System.out.println("array elements are");
		for(int i=0;i<arr.length;i++)
			System.out.print(arr[i]+" ");
		System.out.println();
		System.out.println("enter the element you want to search");
		int val=s.nextInt();
		search(arr,val);
	}

	public static void search(int[] arr, int val) {

		for(int i=0;i<arr.length;i++) {
			if(arr[i]==val) {
				System.out.println("search is successfull at position "+(i+1));
				System.exit(0);
			}
		}
		System.out.println("search not successfull");
	}

}
