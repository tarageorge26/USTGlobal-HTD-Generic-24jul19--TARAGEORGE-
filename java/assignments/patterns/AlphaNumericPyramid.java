public class AlphaNumericPyramid{
	public static void main(String[] args) {
		int n=3,s=n,i,j,k,num=1;
		char c='A';
		for(i=1;i<=n;i++){
			for(k=1;k<s;k++)
				System.out.print(" ");
			s--;

			for(j=1;j<=2*i-1;j++,c++)
				System.out.print(c);
			    
			
			System.out.println();
		}
		s=1;
		for(i=1;i<=n-1;i++){
			for(k=1;k<=s;k++)
				System.out.print(" ");
			s++;

			for(j=1;j<=2*(n-i)-1;j++,num++)
				System.out.print(num);
			
			System.out.println();
		}

	}
}