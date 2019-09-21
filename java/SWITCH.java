public class SWITCH{                                         //switch only works on equality not with >,<,>= or <=;
	public static void main(String[] args) {
		int i=9;
		switch(i){
			case 1:System.out.println("monday");
			       break;
			case 2:System.out.println("tuesday");
			       break;
			case 3:System.out.println("wednesday");
			       break;
			case 4:System.out.println("thursday");
			       break;
			case 5:System.out.println("friday");
			       break;
			case 6:System.out.println("saturday");
			       break;
			case 7:System.out.println("sunday");
			       break;                            
		}

		switch(i){                                          //without using break stmt..depending upon the perception of the problem;
			case 1:                                           
			case 2:
			case 3: 
			case 4:
			case 5:System.out.println("weekday");
			       break;
			case 6:			       
			case 7:System.out.println("weekend");
			       break;
			default: System.out.println("invalid day");    //default can be written anywhere other than the last stmt,if we are writting anywhere else than last we need to give a break stmt;
		}
	}
}