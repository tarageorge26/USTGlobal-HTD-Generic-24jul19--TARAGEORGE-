package dev.com.encapsulation;

public class PetsData {

	public static void main(String[] args) {
		
		Pets p[]=new Pets[4];
		
		p[0]=new Pets();
		p[0].setAge(1);
	    p[0].setBreed("persian-cat");
		p[0].setColor("White");
		p[0].setName("snowy");
		
		p[1]=new Pets();
		p[1].setAge(2);
		p[1].setBreed("German Shepherd");
		p[1].setColor("Brown");
		p[1].setName("Spike");
		
		p[2]=new Pets();
		p[2].setAge(3);
		p[2].setBreed("gold-fish");
		p[2].setColor("rose-gold");
		p[2].setName("mini");
		
		p[3]=new Pets();
		p[3].setAge(3);
		p[3].setBreed("rabbit");
		p[3].setColor("white");
		p[3].setName("Abby");
		
		//dogs[] = {d1,d2,d3};
		
		for(int i=0;i<p.length;i++) {
			System.out.println("Age : "+p[i].getAge());
			System.out.println("Breed : "+p[i].getBreed());
			System.out.println("color : "+p[i].getColor());
			System.out.println("Name : "+p[i].getName());
			
		}
}
}
