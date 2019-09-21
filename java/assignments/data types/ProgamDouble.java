public class ProgamDouble{
	public static void main(String[] args) {
		double d1=-1.7976931348623157;
		double d2=1.7976931348623157;
		double d3=-1.797693134862315789868474; /* it does not show any error,
		                                        it takes only 16 characters after decimal point rest of the values are truncated;*/
		double d4=1.7976931348623157067365635;  /* it does not show any error,
		                                        it takes only 16 characters after decimal point rest of the values are truncated;*/

		System.out.println(d1);                   //-1.7976931348623157
		System.out.println(d2);                   //1.7976931348623157
		System.out.println(d3);                   //-1.7976931348623157
		System.out.println(d4);                   //1.7976931348623157
	}
}