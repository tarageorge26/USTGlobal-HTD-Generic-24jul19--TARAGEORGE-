package com.dev.collections;

import java.util.HashSet;

import dev.com.encapsulation.Dog;

public class Collection1 {

	public static void main(String[] args) {

		HashSet<Dog> hs = new HashSet<Dog>();
		
       Dog d1=new Dog();
		
		d1.setAge(1);
	    d1.setBreed("Dober Man");
		d1.setColor("Black");
		d1.setName("Shiro");
		
		Dog d2=new Dog();
		
		d2.setAge(2);
		d2.setBreed("German Shepherd");
		d2.setColor("Brown");
		d2.setName("Spike");
		
		Dog d3=new Dog();
		
		d3.setAge(3);
		d3.setBreed("German Shepherd");
		d3.setColor("BlackBrown");
		d3.setName("Abby");
		
		d1.setAge(2);
		d2.setAge(3);
		d3.setAge(4);
		
		boolean b=hs.add(d1);
		boolean b1=hs.add(d2);
		boolean b2=hs.add(d3);
		
		System.out.println("output of add() "+b+" "+b1+" "+b2);
		System.out.println(hs);
		System.out.println("size of HashSet() : "+hs.size());
		
		boolean b3=hs.remove(d1);
		System.out.println("output of remove() "+b3);
		System.out.println(hs);
		
		System.out.println("output of contains() : "+hs.contains(d1));
		System.out.println("size of HashSet() : "+hs.size());
		
		System.out.println("clear()...");
		hs.clear();
		System.out.println("size of HashSet() : "+hs.size());
		

	}

}
