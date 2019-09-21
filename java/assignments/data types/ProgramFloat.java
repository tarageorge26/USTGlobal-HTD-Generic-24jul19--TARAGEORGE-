public class ProgramFloat{
	public static void main(String[] args) {
		float f1=3.40282347f;
		float f2=-3.40282347f;
		float f3=3.402823475357f;        /* it does not show any error,
		                                        it takes only 8 characters after decimal point rest of the values are truncated;*/
		float f4=-3.40282347363f;        /* it does not show any error,
		                                        it takes only 8 characters after decimal point rest of the values are truncated;*/


		System.out.println(f1);          //3.4028234
	    System.out.println(f2);          //-3.4028234
	    System.out.println(f3);          //3.4028234
	    System.out.println(f4);          //-3.4028234



	}
}