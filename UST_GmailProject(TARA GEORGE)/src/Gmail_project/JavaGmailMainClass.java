package Gmail_project;

import java.util.Scanner;

public class JavaGmailMainClass extends Implementation_class {

	public static void main(String[] args) {
		
		Implementation_class ic = new Implementation_class();
		Scanner s = new Scanner(System.in);
		System.out.println("Hai welcome to Gmail");
		int choice;
		int c;
		do {
		System.out.println("enter your choice\n 1.Login\n 2.Register");
        choice=s.nextInt();
        
        switch(choice) {
        case 1: String key=ic.login();
        		do {
        	    System.out.println("enter what you want to do?");
        		System.out.println("1.Compose\n2.Show Inbox");
        		c=s.nextInt();
        		switch(c) {
        		case 1:ic.compose(key);
        			   break;
        		case 2:ic.showInbox(key);
        				break;        		
        		}
        		}while(c!=3);
        		break;
        case 2: ic.register();
        		break;
        }
		
        }while(choice!=3);
	}
}
