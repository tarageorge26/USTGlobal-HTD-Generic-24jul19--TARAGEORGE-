public class RelationalOperator{
	public static void main(String[] args) {
		int i=10,j=66;
		char c='A';
		boolean b=i==j;
		System.out.println("for == :"+b);
		b=i!=j;
		System.out.println("for != :"+b);
		b=i>j;
		System.out.println("for > :"+b);
		b=i<j;
		System.out.println("for < :"+b);
		b=i>=j;
		System.out.println("for >= :"+b);
		b=i<=j;
		System.out.println("for <= :"+b);
		b=c>j;
		System.out.println("for 'A' > j :"+b);
		b=c<j;
		System.out.println("for 'A' < j :"+b);
	}
}