package jfzmMainMenu.main;

import jfzmMainMenu.components.Frame;
import jfzmMainMenu.screens.MenuPanel;

public class Main {
	public static void main(String[] args) {
		Config.setMultiplier();
		Frame frame = new Frame(Config.x,Config.y);
		
		MenuPanel initialPanel = new MenuPanel(frame.getJFrame());
		frame.getJFrame().getContentPane().removeAll();
		frame.getJFrame().getContentPane().add(initialPanel.getPanel().getJComponent());
		frame.getJFrame().revalidate();
		initialPanel.getPanel().getJComponent().repaint();
		
//		new java.util.Timer().schedule( 
//		        new java.util.TimerTask() {
//		            @Override
//		            public void run() {
//		        		MenuPanel initialPanel = new MenuPanel(frame.getJFrame());
//		        		frame.getJFrame().getContentPane().removeAll();
//		        		frame.getJFrame().getContentPane().add(initialPanel.getPanel().getJComponent());
//		        		frame.getJFrame().revalidate();
//		        		initialPanel.getPanel().getJComponent().repaint();
//		            }
//		        }, 
//		        2500 
//		);
		
	}
}
