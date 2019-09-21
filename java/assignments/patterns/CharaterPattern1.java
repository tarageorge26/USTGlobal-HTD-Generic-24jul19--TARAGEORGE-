public class CharaterPattern1{
	public static void main(String[] args) {
		char a1='A',a2='a';
		for (int i=1;i<=4 ;i++ ) {
			
			for (int j=1;j<=i ;j++ ) {
			  System.out.print(a1+""+a2+" ");
			  a1++;
			  a2++;	
			}
			System.out.println();
			
		}
	}
}