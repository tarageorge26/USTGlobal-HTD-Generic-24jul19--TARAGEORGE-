package com.dev.collections;

import java.util.TreeSet;

import dev.com.encapsulation.Employee;

public class EmployeeTreeSet {

	public static void main(String[] args) {
		
		TreeSet<Employee> ts = new TreeSet<Employee>();

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
	       
	       ts.add(e1);
		   ts.add(e2);
		   ts.add(e3);
			
			System.out.println(ts);

	}

}
