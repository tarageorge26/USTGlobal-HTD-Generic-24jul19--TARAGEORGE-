package dev.com.exceptions;

public class ExceptionHandling1{
	
	//throw example for custom exception

	public static void main(String[] args) throws CustomException {
		
		s();
		try {
			 divide(10,0);
		}catch(Exception e) {
			throw new CustomException(1);
		}
	}

	public static int divide(int i, int j) {
		int res= i/j;
		System.out.println("result = "+res);
		return 1;
	}
	
	public static void s() throws CustomException{

		try { 
			StringBuffer sb = new StringBuffer(1);
			}catch(Exception e) {
				  new CustomException().printStackTrace();//printstacktrace is todisplay exception msg
				  										  //hence userdefined will not display(throw)
			  }
		}
	}


