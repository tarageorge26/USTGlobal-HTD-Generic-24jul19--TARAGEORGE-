package dev.com.abstraction;

public class AbstractionParent extends  AbstractParent {

	@Override
	void showDetails() {
		System.out.println("i am extending from AbstractParent");
		System.out.println("i am displaying employee details");
	}
	public static void main(String[] args) {
		AbstractionParent ap = new AbstractionParent();
		ap.showDetails();

	}

}
