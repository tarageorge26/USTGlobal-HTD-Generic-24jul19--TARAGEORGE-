package Gmail_project;

import java.util.HashMap;
import java.util.Scanner;

public class Implementation_class implements Gmail_Operation {
	
	HashMap<String,Account> hm = new HashMap<String,Account>();
	HashMap<String,Message_box> hm1 = new HashMap<String,Message_box>();
	Scanner s1 = new Scanner(System.in);
	Account a2=new Account();
	int i=0;
	int j=0;
	
	

	@Override
	public String login() {
		
		System.out.println("enter your userId(key)");
		String key =s1.nextLine();
		Account a1=hm.get(key);
        System.out.println("Enter email...");
		String email=s1.nextLine();
		System.out.println("enter password...");
		String pass=s1.nextLine();
		String e=a1.getEmail();
		String p=a1.getPassword();
		
		//int res=a1.compareTo(a1);
		if(e.equals(email)&&(p.equals(pass))) {
			System.out.println("login successfuly");
		}
		else {
			System.out.println("login failed");
			System.exit(0);
		}
		return key;
	}

	@Override
	public void register() {
		i=i+1;
		Account a = new Account();
		System.out.println("enter the userid key(string value)");
		String k=s1.nextLine();
		a.setUserId(k);
		System.out.println("Enter Username...");
		a.setUserName(s1.nextLine());
		System.out.println("Enter email...");
		a.setEmail(s1.nextLine());
		System.out.println("enter password...");
		a.setPassword(s1.nextLine());
		a2=hm.put(k,a);
		System.out.println(hm);
		System.out.println("registered successfully");
	}

	@Override
	public void compose(String key) {
		j=j+1;
		Message_box m = new Message_box();
		m.setMessageID(j);
		System.out.println("enter to userId(key)");
		String str = s1.nextLine();
		m.setUserId(str);
		System.out.println("type the message you want...");
		m.setMessage(s1.nextLine());
		System.out.println("message sent");
	    Message_box m1 =hm1.put(key,m);
	    System.out.println(hm1);
	    
		}


	@Override
	public void showInbox(String uid) {
		
		Message_box m1 =hm1.get(uid);
		System.out.println(m1);
		
		
	}

}
