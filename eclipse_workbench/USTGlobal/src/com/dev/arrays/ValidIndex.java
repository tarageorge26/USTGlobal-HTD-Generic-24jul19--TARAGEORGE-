package com.dev.arrays;

public class ValidIndex {

	public static void main(String[] args) {
		int[] arr = { 10, 20, 30, 40, 50, 60 };
		int index = 10;
		if (index < arr.length) {
			System.out.println(index + " is a valid index");
			for (int i = 0; i <= index; i++)
				System.out.println(arr[i]);

		} else
			System.out.println("not a valid index");
	}
}
