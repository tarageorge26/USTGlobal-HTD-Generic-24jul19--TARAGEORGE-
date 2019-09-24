package com.dev.collections;

import java.util.ArrayList;

import dev.com.encapsulation.Dog;

public class ArrayListExample {

	public static void main(String[] args) {
		
		ArrayList<Dog> ar = new ArrayList<Dog>();
		
		 Dog d1=new Dog();
		 	d1.setAge(3);
			d1.setBreed("Dober Man");
			d1.setColor("Black");
			d1.setName("Shiro");
			
			Dog d2=new Dog();
			
			d2.setAge(4);
			d2.setBreed("German Shepherd");
			d2.setColor("Brown");
			d2.setName("Spike");
			
			Dog d3=new Dog();
			
			d3.setAge(3);
			d3.setBreed("German Shepherd");
			d3.setColor("BlackBrown");
			d3.setName("Abby");
			
			ar.add(d1);
			ar.add(d2);
			ar.add(d3);
			
			for(Dog dog : ar)
				System.out.println(dog);
			
			//System.out.println(ar);
			
			System.out.println("size of arraylist before trimToSize() : "+ar.size());
			ar.trimToSize();
			System.out.println("size of arraylist after trimToSize() : "+ar.size());

	}

}
