public class Program1{
	public static void main(String[] args) {
		int daynum=7;
		String name="Tara";
		switch(daynum){
			case 1:                                           
			case 2:
			case 3: 
			case 4:
			case 5:System.out.println("weekday");
	               System.out.println("Name = "+name);		
			       break;
			case 6:			       
			case 7:System.out.println("weekend");
					for(int i=1;i<=5;i++){
					System.out.println("Name = "+name);	
					}
			       break;
			default: System.out.println("invalid day"); 
		}
	}
}