package contactfile;

import java.util.HashSet;
import java.util.Scanner;

public class Implementation implements ContactFile{	

HashSet<Contact> hs = new HashSet<Contact>();

Scanner s1 =new Scanner(System.in);
Scanner s2 =new Scanner(System.in);
Scanner s3 =new Scanner(System.in);
Scanner s4 =new Scanner(System.in);
Contact c1 = new Contact();
Contact c2 = new Contact();
Contact c3 = new Contact();
public void add() {

	Contact c = new Contact();
	System.out.println("enter name");
	String n=s2.nextLine();
	c.setName(n);
	System.out.println("enter number");
	long num=s3.nextLong();
	c.setNumber(num);
	System.out.println("enter Group");
	String grp=s4.nextLine();
	c.setGroup(grp);
	hs.add(c);
	System.out.println("added successfully");
	
}

public void addData() {
	
	c1.setName("arun");
	c1.setNumber(5487);
	c1.setGroup("a");

	
	c2.setName("bharath");
	c2.setNumber(8635);
	c2.setGroup("a");

	
	c3.setName("paddy");
	c3.setNumber(2352);
	c3.setGroup("a");

	hs.add(c1);
	hs.add(c2);
	hs.add(c3);
}


	@Override
	public void showAllContact() {
		System.out.println(hs);	

	}

	@Override
	public void searchContact() {
		int choice;
		System.out.println("enter contact name ");
		String name = s1.nextLine();
		System.out.println(name);
		String c1Name=c1.getName();
		String c2Name=c2.getName();
		String c3Name=c3.getName();
		if(name.equals(c1Name)|| name.equals(c2Name)||name.equals(c3Name)) {
	           	
			   System.out.println("1.call\n2.message\n3.back");
		       choice=s1.nextInt();
		       switch(choice) {
		       case 1:System.out.println("calling ");	
		       		  break;
		       case 2:System.out.println("type the message");
		              String msg=s1.nextLine();
		              if(msg!=null) {
		              System.out.println("message sent");
		              }
		              else{
		            	  System.out.println("empty text message");
		              }
		              break;
		              
		       case 3:System.out.println("back to previous menu");
		    	      System.exit(0);
		    	      break;
		       }
			}
		else {
			System.out.println("no contact found");
		}
		    	   
		}
		

	@Override
	public void operateContact() {
		Contact c= new Contact();
		String name1;
		String group1;
		long number1;
		System.out.println("1.add contact\n2.delete contact\n3.update contact");
		int choice=s1.nextInt();
		switch(choice) {
	   case 1:add();	       
		      break;
	   case 2:System.out.println("deleting contacts");
	   		  break;
	   case 3:System.out.println("updating contacts");
	          
		}
		
	}


		
	}


