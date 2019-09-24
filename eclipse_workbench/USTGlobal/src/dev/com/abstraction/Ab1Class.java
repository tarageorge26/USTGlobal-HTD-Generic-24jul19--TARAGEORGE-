package dev.com.abstraction;

public class Ab1Class implements Ab1 {
	
	@Override
	public void print() {
		System.out.println("i am print method of interface");
		
	}
	
	public static void main(String[] args) {
		Ab1Class a1 = new Ab1Class();
		a1.print();
		a1.display();
		Ab1.show(); //static method
		
		
	}

}
