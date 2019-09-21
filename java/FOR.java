public class FOR{
	public static void main(String[] args) {
		int n=27;
		for (int i=1;i<=10 ;i++ ) {
			//System.out.println("i = "+i);	
			System.out.println(n+" X "+i+" = "+(n*i));
			//i++ we can also have increment inside the body
			//for(;;)---->infinite loop	
			//any stmt after infinite loop written will throw an error(unreachable stmt error)
		}
		System.out.println("code outside the for loop");
	}
}