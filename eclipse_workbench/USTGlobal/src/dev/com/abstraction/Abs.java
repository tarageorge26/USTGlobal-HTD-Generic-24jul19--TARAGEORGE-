package dev.com.abstraction;

public interface Abs {
     void print();
	default void display() {
		System.out.println("i am default method");
	}
}
