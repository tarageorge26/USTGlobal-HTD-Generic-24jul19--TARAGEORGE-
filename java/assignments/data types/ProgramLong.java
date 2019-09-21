public class ProgramLong{
	public static void main(String[] args) {
		long l1=-9223372036854775808l;
		long l2=9223372036854775807l;
		//long l3=-9223372036854775809;             // this value is out of range for long
	    //long l4=9223372036854775808;             // this value is out of range for long

        System.out.println(l1);
        System.out.println(l2);
       // System.out.println(l3);
        //System.out.println(l4);
	}
}