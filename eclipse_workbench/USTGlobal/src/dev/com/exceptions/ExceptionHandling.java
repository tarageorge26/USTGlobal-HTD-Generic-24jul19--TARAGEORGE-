package dev.com.exceptions;

public class ExceptionHandling extends CustomException {
	//try-catch example
	//throws example
	
	

	public static void main(String[] args) throws CustomException{

		try { 
			s();
			System.out.println("no exception for s()");
			int i=divide(10,2);
			System.out.println("no exception for divide()");
			System.out.println("result = "+i);
		}catch(NegativeArraySizeException e) {
			System.err.println("Exception caught in catch block");
			System.err.println("getmessage() : "+e.getMessage());
			//e.printStackTrace();//shows the information ans type of exception occured.
		}catch(ArithmeticException e) {
			System.err.println("Exception caught in catch block");
			System.err.println("getmessage() : "+e.getMessage());
//			e.printStackTrace();//shows the information ans type of exception occured.
		}finally { 
			System.out.println("this is finally block");
		}
//		System.out.println("print stmt after");

	}

	public static int divide(int i, int j) {
		int k=i/j;
		System.out.println(k);
		return 1;
	}

	public static void s() throws CustomException {
//		int i=-1;
//		if(i<0) {
//			throw new CustomException();
//		}
		StringBuffer sb = new StringBuffer(-1);
	}

}
