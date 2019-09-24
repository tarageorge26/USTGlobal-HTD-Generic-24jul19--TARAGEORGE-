package com.dev.inheritance;

public class WhatsApp1 {
	
	static WhatsApp1 w1 = new WhatsApp1();
	
	public void sendMsg() {
		System.out.println("sending message");
	}

	public static void main(String[] args) {
		w1.sendMsg();
	}

}
