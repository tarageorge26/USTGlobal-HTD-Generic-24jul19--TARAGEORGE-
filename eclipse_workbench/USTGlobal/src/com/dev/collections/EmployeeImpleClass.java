package com.dev.collections;

import java.util.HashMap;

import dev.com.abstraction.EmployeeInterface;
import dev.com.encapsulation.Employee;

public class EmployeeImpleClass implements EmployeeInterface{
	
	HashMap<String,Employee> hm = new HashMap<String,Employee>();

	@Override
	public boolean addEmployee(String key, Employee e) {
		if(e!=null) {
			Employee emp = hm.put(key, e);
			return true;
		}
		return false;
	}

	@Override
	public boolean deleteEmployee(String key) {
		Employee b=hm.remove(key);
		if(b!=null) {
			System.out.println("deleted successfully : "+b);
			return true;
		}
		else 
			return false;
	}

	@Override
	public void getEmployee() {
		System.out.println(hm);
		
	}

	@Override
	public boolean updateEmployee(Employee e, String email) {
		if(e!=null) {
		e.setEmail(email);
		System.out.println("update successfully....");
		getEmployee();
		return true;
		}
		return false;
	}

	
	


	
	

}
