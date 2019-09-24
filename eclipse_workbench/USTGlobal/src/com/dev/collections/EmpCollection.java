package com.dev.collections;

import java.util.HashSet;

import dev.com.encapsulation.Employee;

public class EmpCollection {

	public static void main(String[] args) {
		
		HashSet<Employee> hs = new HashSet<Employee>();
		
	       Employee e1=new Employee();
			
	       e1.setId(1);
	       e1.setName("Abishek");
	       e1.setEmail("abhishek@gmail.com");
	       e1.setPassword("abhi@123");
			
	       Employee e2=new Employee();
			
	       e2.setId(2);
	       e2.setName("Bharath");
	       e2.setEmail("bharath@gmail.com");
	       e2.setPassword("barry$123");
	       
	       Employee e3=new Employee();
			
	       e3.setId(3);
	       e3.setName("Appu");
	       e3.setEmail("appu@gmail.com");
	       e3.setPassword("appu#06");
			
			e1.setEmail("abhishek123@gmail.com");
			e2.setEmail("bharathpgowda@gmail.com");
			e3.setEmail("apoorvamahesh@gmail.com");
			
			boolean b=hs.add(e1);
			boolean b1=hs.add(e2);
			boolean b2=hs.add(e3);
			
			System.out.println("output of add() "+b+" "+b1+" "+b2);
			System.out.println(hs);
			System.out.println("size of HashSet() : "+hs.size());
			
			boolean b3=hs.remove(e1);
			System.out.println("output of remove() "+b3);
			System.out.println(hs);
			
			System.out.println("output of contains() : "+hs.contains(e1));
			System.out.println("size of HashSet() : "+hs.size());
			
			System.out.println("clear()...");
			hs.clear();
			System.out.println("size of HashSet() : "+hs.size());
			

		}


	}


