package jfzmMainMenu.components;

import javax.swing.JComponent;
import javax.swing.JPanel;

import jfzmMainMenu.launcher.Config;

import java.awt.Color;

public class Panel implements FrameComponent {
	
	private JPanel panel;

	public Panel(int x, int y) {
		panel = new JPanel();
		panel.setSize((int)(x*Config.multiplier),(int)(y*Config.multiplier));
		panel.setLayout(null);
	}
	
	public void add(FrameComponent fc) {
		panel.add(fc.getJComponent());
	}

	@Override
	public JComponent getJComponent() {
		return panel;
	}

}
