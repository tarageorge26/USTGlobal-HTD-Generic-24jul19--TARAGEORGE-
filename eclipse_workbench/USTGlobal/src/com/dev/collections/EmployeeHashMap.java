package com.dev.collections;

import dev.com.encapsulation.Employee;

public class EmployeeHashMap extends EmployeeImpleClass{

	public static void main(String[] args) {
		
		EmployeeImpleClass eic = new EmployeeImpleClass();
		
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
			
			boolean b1 = eic.addEmployee("1", e1);
			boolean b2 = eic.addEmployee("2", e2);
			boolean b3 = eic.addEmployee("3", e3);
			
			System.out.println("add results : "+b1+" "+b2+" "+b3);
			eic.getEmployee();
			eic.updateEmployee(e1,"abhishek@hotmail");
			eic.deleteEmployee("3");
			
			
			
			
		

	}

}
