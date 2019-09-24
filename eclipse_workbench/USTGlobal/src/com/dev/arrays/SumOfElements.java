package com.dev.arrays;

public class SumOfElements {

	public static void main(String[] args) {

		int[] a= {10,20,30,40,50,60,70};
		int sum=0;
		int first=a[0];
		int mid=a.length/2;
		int secLast=a.length-2;
		sum=a[first]+a[mid]+a[secLast];
		System.out.println("printing sum of 1st,mid and last 2nd element of array");
		System.out.println("sum = "+sum);

	}
}
