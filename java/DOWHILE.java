public class DOWHILE{
	public static void main(String[] args) {
		int n=11,i=1;
		do{                                                 //the block or body is executed atleast once;
			System.out.println(n+" X "+i+" = "+(n*i));
			i++;                                            //if we dont give inc/dec stmt the loop enters infinite loop; 
		}while(i<=10);
	}
}k