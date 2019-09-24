package com.dev.collections;

import java.util.HashMap;

import dev.com.encapsulation.Dog;

public class Collection2 {

	public static void main(String[] args) {
		
		HashMap<String,Dog> hm = new HashMap<String,Dog>();
		
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
			
			//hm.put("1",d1); 
			// periously linked value with the same key,hence on put() it returns the old value
			//hm.put("1",null);
			//we can also demap the old value by just giving null in the value
			Dog b=hm.put("1",d1);
			Dog b1=hm.put("2",d2);
			Dog b2=hm.put("3",d3);
			
			
			System.out.println(hm);
			
			System.out.print("removing element : ");
			 Dog f =hm.remove("2");
			 System.out.println(f);
			 System.out.println(hm);
			 
			 System.out.println("output of containsKey() : "+hm.containsKey("2"));
			 System.out.println("output of containsValue() : "+hm.containsValue(d2));

		}


	}
