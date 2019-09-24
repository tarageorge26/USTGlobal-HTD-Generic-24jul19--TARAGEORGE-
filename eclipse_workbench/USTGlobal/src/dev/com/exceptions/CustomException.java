package dev.com.exceptions;

public class CustomException extends Exception {
	
	public CustomException() {
		System.out.println("Exception occured");
	}	
	public CustomException(int i) {
		System.out.println("Exception occured for integer");
	}

	
	public CustomException(String s) {
		System.out.println("Exception occured for string");
	}

//	@Override
//	public String getMessage() {
//		return "/ by zero";
//	}
//
//	

}
