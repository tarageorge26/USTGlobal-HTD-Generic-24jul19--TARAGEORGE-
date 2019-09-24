package dev.com.abstraction;

public class Abstraction extends AbstractExample{
	
	@Override
	void display() {
		System.out.println("this is implemented abstract method overriden in subclass");
	}

	public static void main(String[] args) {
	
    Abstraction a = new Abstraction();
    a.display();
    a.show();
	}

}
