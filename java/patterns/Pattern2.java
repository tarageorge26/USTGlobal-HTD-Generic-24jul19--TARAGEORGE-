public class Pattern2{
	public static void main(String[] args) {
		int i,j,n=4;
		for(i=1;i<=n;i++){
			for(j=n;j>=i;j--){
			System.out.print("*");
			}
		System.out.println();
		}
	}
}