package com.dev.arrays;

public class CreatingArrays {

	public static void main(String[] args) {

		//		int[] intArray;         //3 ways an array can be declared;
		char []charArray;
		charArray=new char[5];
		byte byteArray[];
		byteArray=new byte[4];

		int intArray[] = new int[5];//declaration and creation we can have in a single line;
        
		int[] intArray1= {100,200,300,400,500};//declaring,creating and initialising in a single line;
		System.out.println(intArray1[3]);//if we try to give index more than the size;we get 
		                                 //ArrayIndexOutOfBoundexception.
		
		//we have a pre-defined variable for arrays which specifies length of the array
		System.out.println(intArray1.length);
		
		
		
		intArray[0]=10;//adding elements(array initialisation) into the array
		intArray[1]=20;
		intArray[2]=30;
		intArray[3]=40;
		intArray[4]=50;
		int res=intArray[0]*3;
		System.out.println(res);
		res=intArray[1]+10;
		System.out.println(res);
		res=intArray[2]-3;
		System.out.println(res);
		res=intArray[3]/4;
		System.out.println(res);
		res=intArray[4] % 3;
		System.out.println(res);


		//System.out.println((intArray[1]*3));//should not do this 

		charArray[0]='A';
		charArray[1]='B';
		charArray[2]='C';
		charArray[3]='D';
		charArray[4]='E';
		//charArray[4]='F'; //modification of an existing element is possible , but no new element can be added;



	}

}
