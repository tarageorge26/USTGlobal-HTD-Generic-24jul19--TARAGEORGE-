public class IncDecOperator{
	public static void main(String[] args) {
		int i=10;
		int j=i++;                  // if we dont assign to a new variable, i.e., i++, we get the incremented values of i.
		System.out.println(j);
		j =++i;                     // the post incremented value is already assigned to i and that is getting pre incremented.      so it gives 12.
		System.out.println(j);


		int n=20;
		int m=n--;
		System.out.println(m);
		m=--n;
		System.out.println(m);
        
	}
}