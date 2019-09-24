package dev.com.employeeDB;

import java.util.HashMap;



public class EmployeeImple implements EmployeeInterface {	
	HashMap<Integer,EmployeeDetails> hm = new HashMap<Integer,EmployeeDetails>();

	@Override
	public boolean addEmp(Integer key, EmployeeDetails e) {
		if(e!=null) {
			EmployeeDetails emp = hm.put(key, e);
			System.out.println("added successfully");
			return true;
		}
		return false;
	}

	@Override
	public boolean searchEmp(Integer empId) {
		if(empId!=null) {
			EmployeeDetails emp=hm.get(empId);
			System.out.println("search successfull");
			return true;
		}
		
		return false;
	}

	@Override
	public boolean removeEmp(Integer empId) {
		if(empId!=null) {
			EmployeeDetails emp=hm.remove(empId)
			System.out.println("removed successfully");
			return true;
		}
		return false;
	}

	@Override
	public boolean updateEmp(Integer empId,String email) {
		if(empId!=null) {
			EmployeeDetails e=hm.get(empId);
			e.setEmail(email);
			System.out.println("update successfully....");
			return true;
			}
		return false;
	}

	@Override
	public void taxPayable(Integer empId) {
		if(empId!=null) {
			EmployeeDetails e=hm.get(empId);
			double sal=e.getSalary();
			if(sal*12>=100000) {
			   System.out.println("Tax Payable : 9.35% ");
			}
			else if(sal*12>=860000 && sal*12<100000){
				System.out.println("Tax Payable : 8.87% ");
			}
			else if(sal*12>=540000 && sal*12<840000) {
				System.out.println("Tax Payable : 8.19% ");
			}
			else if(sal*12>=380000 && sal*12<540000) {
				System.out.println("Tax Payable : 7.34% ");
			}
			else{
				System.out.println("Tax Payable : 5.4% ");
			}
	}
	}

	@Override
	public void netPay(Integer empId) {
		
		if(empId!=null) {
			EmployeeDetails e=hm.get(empId);
			double sal=e.getSalary();
			if(sal*12>=100000) {
				System.out.println(sal);
				   System.out.println("net pay ="+(sal-5619));
				}
				else if(sal*12>=860000 && sal*12<100000){
					 System.out.println("net pay ="+(sal-4876));
				}
				else if(sal*12>=540000 && sal*12<840000) {
					 System.out.println("net pay ="+(sal-4321));
				}
				else if(sal*12>=380000 && sal*12<540000) {
					 System.out.println("net pay ="+(sal-3765));				}
				else{
					 System.out.println("net pay ="+(sal-3189));
				}
		}
	}

	@Override
	public void salGrade(Integer empId) {
		if(empId!=null) {
			EmployeeDetails e=hm.get(empId);
			double sal=e.getSalary();
			if(sal*12>=100000) {
			   System.out.println("SalGrade : AA ");
			}
			else if(sal*12>=860000 && sal*12<100000){
				System.out.println("SalGrade : A ");
			}
			else if(sal*12>=540000 && sal*12<840000) {
				System.out.println("SalGrade : B ");
			}
			else if(sal*12>=380000 && sal*12<540000) {
				System.out.println("SalGrade : C ");
			}
			else{
				System.out.println("SalGrade : D ");
			}
	}
		
	}
	
	public void displayEmp() {
		System.out.println(hm);
	}

	
	
}
