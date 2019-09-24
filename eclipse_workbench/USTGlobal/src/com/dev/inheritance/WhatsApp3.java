package com.dev.inheritance;

public class WhatsApp3 extends WhatsApp2 {
	
static WhatsApp3 w3 = new WhatsApp3();
	
	public void blueDoubleTick() {
	super.doubleTick();System.out.println("seen message"); //usage of super statement
	}


	public static void main(String[] args) {
		w3.blueDoubleTick();

	}

}
