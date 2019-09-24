package dev.com.abstraction;

@FunctionalInterface
public interface FunctionalInterface1{
	
	//functional interface have only one abstract method.
	// we use @FunctionalInterface
	
	void show();
	//void display(); //only one abstract method is present
	public static void print() {
		System.out.println("i am print static method");
	}

}
