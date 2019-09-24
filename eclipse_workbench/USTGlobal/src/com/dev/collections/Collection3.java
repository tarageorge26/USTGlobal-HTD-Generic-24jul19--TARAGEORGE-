package com.dev.collections;

import java.util.TreeSet;

import dev.com.encapsulation.Dog;

public class Collection3 {

	public static void main(String[] args) {
		
		TreeSet<Dog> ts = new TreeSet<Dog>();
		
		 Dog d1=new Dog();
			
			d1.setAge(2);
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
			
			ts.add(d1);
			ts.add(d2);
			ts.add(d3);
			
			System.out.println(ts);
	}

}
