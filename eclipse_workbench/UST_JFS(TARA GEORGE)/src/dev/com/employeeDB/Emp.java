package dev.com.employeeDB;

import com.dev.collections.EmployeeImpleClass;

public class Emp extends EmployeeImple{

	public static void main(String[] args) {
		

		EmployeeImple eic = new EmployeeImple();
		
		 EmployeeDetails e1=new EmployeeDetails();
			
	       e1.setEmpID(1);
	       e1.setEname("Abishek");
	       e1.setEmail("abhishek@gmail.com");
	       e1.setPassword("abhi@123");
	       e1.setSalary(76447);
			
	       EmployeeDetails e2=new EmployeeDetails();
			
	       e2.setEmpID(2);
	       e2.setEname("Bharath");
	       e2.setEmail("bharath@gmail.com");
	       e2.setPassword("barry$123");
	       e1.setSalary(24647);
	       
	       EmployeeDetails e3=new EmployeeDetails();
			
	       e3.setEmpID(3);
	       e3.setEname("Appu");
	       e3.setEmail("appu@gmail.com");
	       e3.setPassword("appu#06");
			
//			e1.setEmail("abhishek123@gmail.com");
//			e2.setEmail("bharathpgowda@gmail.com");
//			e3.setEmail("apoorvamahesh@gmail.com");
			
			boolean b1 = eic.addEmp(10, e1);
			boolean b2 = eic.addEmp(20, e2);
			boolean b3 = eic.addEmp(30, e3);
			eic.displayEmp();
			System.out.println("add results : "+b1+" "+b2+" "+b3);
			
			boolean b4=eic.searchEmp(1);
			System.out.println(b4);
			
			eic.taxPayable(10);
			eic.netPay(10);
			eic.salGrade(10);
			
//			
		

	}

}
