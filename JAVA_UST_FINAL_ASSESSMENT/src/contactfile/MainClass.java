package contactfile;
import java.util.Scanner;

public class MainClass extends Implementation{

	public static void main(String[] args) {

		Implementation i = new Implementation();
		i.addData();
		Scanner s = new Scanner(System.in);		
		int c;
		do {
			System.out.println("Contact List");
			System.out.println("1.Show all contact\n2.Search contact\n3.Operate on Contact");
			c=s.nextInt();
			switch(c){
			case 1:i.showAllContact();
					 break;
			case 2: i.searchContact();
				   break;
			case 3:i.operateContact();
			       break;    			   
			}
		}while(c!=4);

	}
}




