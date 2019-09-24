package dev.com.employeeDB;

public interface EmployeeInterface {
	
	 boolean addEmp(Integer key,EmployeeDetails e);
	 boolean searchEmp(Integer empId);
	 boolean removeEmp(Integer empId);
	 boolean updateEmp(Integer empId,String email);
	 void taxPayable(Integer empId);
	 void netPay(Integer empId);
	 void salGrade(Integer empId);
	

}
