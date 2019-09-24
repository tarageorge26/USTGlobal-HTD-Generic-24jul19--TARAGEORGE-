package dev.com.employeeDB;

public class EmployeeDetails {
	
	@Override
	public String toString() {
		return "EmployeeDetails [empID=" + empID + ", ename=" + ename + ", email=" + email + ", salary=" + salary + "]";
	}
	private int empID;
	private String ename;
	private String email;
	private String password;
	private double salary;
	public int getEmpID() {
		return empID;
	}
	public void setEmpID(int empID) {
		this.empID = empID;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	public String getPassword() {
		return password;
	}

}
