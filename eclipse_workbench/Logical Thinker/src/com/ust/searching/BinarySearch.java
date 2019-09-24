package com.ust.searching;

import java.util.Scanner;

public class BinarySearch {

	public static void main(String[] args) {

		int arr[]= {10,46,48,56,34,67};
		//		Scanner s = new Scanner(System.in);
		//		System.out.println("array elements are");
		//		for(int i=0;i<arr.length;i++)
		//			System.out.print(arr[i]+" ");
		//		System.out.println();
		//		System.out.println("enter the element you want to search");
		//		int val=s.nextInt();
		//		boolean res = binarySearch(arr,val);
		int res=binarySearch(arr, 0 , arr.length-1,48);
		System.out.println(res);

	}

	//	private static boolean binarySearch(int[] arr, int val) {
	//		int low=0;
	//		int high=arr.length-1;
	//		while(low<=high) {
	//			int mid=low+high/2;
	//			if(val==arr[mid]) {
	//				System.out.println("value present at "+(mid+1));
	//				return true;
	//			}
	//			else if(val<arr[mid]) 
	//				high=mid-1;
	//			else
	//				low=mid+1;
	//		}
	//		System.out.println("search not successfull");
	//		return false;
	//	}
	//	
	//recursive solution
	public static int binarySearch(int[] arr,int low,int high,int val) {
		int mid=(low + high)/2;
		if(low<=high) {
			if(arr[mid] == val) {
				return mid;
			}else if(arr[mid] < val) {
				return binarySearch(arr,mid+1,high,val);
			}else {
				return binarySearch(arr,low,mid-1,val);
			}
		}
		return -1;
	}


}
