package dev.com.encapsulation;

public class StudentData {

	public static void main(String[] args) {
		Student s1 = new Student();
		s1.setRegno(15077);
		s1.setName("Tara");
		s1.setEmail("tara@gmail.com");
		s1.setPassword("123456");
		
		System.out.println("registration no = "+s1.getRegno());
		System.out.println("name  = "+s1.getName());
		System.out.println("email  = "+s1.getEmail());
		

	}

}
