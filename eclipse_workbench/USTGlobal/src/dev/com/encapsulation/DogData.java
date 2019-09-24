package dev.com.encapsulation;

public class DogData {

	public static void main(String[] args) {
		
		Dog d1[]=new Dog[3];
		
		d1[0]=new Dog();
		d1[0].setAge(1);
	    d1[0].setBreed("Dober Man");
		d1[0].setColor("Black");
		d1[0].setName("Shiro");
		
		d1[1]=new Dog();
		d1[1].setAge(2);
		d1[1].setBreed("German Shepherd");
		d1[1].setColor("Brown");
		d1[1].setName("Spike");
		
		d1[2]=new Dog();
		d1[2].setAge(3);
		d1[2].setBreed("German Shepherd");
		d1[2].setColor("BlackBrown");
		d1[2].setName("Abby");
		
		//dogs[] = {d1,d2,d3};
		
		for(int i=0;i<d1.length;i++) {
			System.out.println("Age : "+d1[i].getAge());
			System.out.println("Breed : "+d1[i].getBreed());
			System.out.println("color : "+d1[i].getColor());
			System.out.println("Name : "+d1[i].getName());
			
		}
	}

}
