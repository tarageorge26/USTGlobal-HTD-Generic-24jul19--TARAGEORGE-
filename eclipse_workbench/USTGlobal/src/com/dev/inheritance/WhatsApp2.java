package com.dev.inheritance;

public class WhatsApp2 extends WhatsApp1 {
	
static WhatsApp2 w2 = new WhatsApp2();
	
	public void doubleTick() {
		super.sendMsg();System.out.println("delivered");
	}

	public static void main(String[] args) {
	
		w2.doubleTick();
	}

}
