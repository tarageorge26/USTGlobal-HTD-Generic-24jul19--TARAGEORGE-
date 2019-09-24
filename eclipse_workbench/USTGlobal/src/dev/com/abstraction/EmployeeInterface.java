package dev.com.abstraction;

import dev.com.encapsulation.Employee;

public interface EmployeeInterface {
	
	 boolean addEmployee(String key,Employee e);
	 boolean deleteEmployee(String key);
	 boolean updateEmployee(Employee e,String email);
	 void getEmployee();

}
