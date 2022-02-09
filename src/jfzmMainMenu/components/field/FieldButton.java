package jfzmMainMenu.components.field;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JComponent;

import jfzmMainMenu.components.FrameComponent;
import jfzmMainMenu.main.Config;

public class FieldButton implements FrameComponent, MouseListener {
	
	private JButton button;
	public JButton getJComponent() {
		return button;
	}
	
	public FieldButton(double x, double y, double xSize, double ySize) {
		button = new JButton();
		button.addMouseListener(this);
		button.setBounds((int) (x * Config.multiplier), (int) (y * Config.multiplier),
				(int) (xSize * Config.multiplier), (int) (ySize * Config.multiplier));
		button.setContentAreaFilled(false);
		button.setFocusable(false);
		button.setBorder(BorderFactory.createLineBorder(Color.white));
		button.setBorderPainted(false);
	}

	@Override
	public void mouseClicked(MouseEvent e) {

	}

	@Override
	public void mousePressed(MouseEvent e) {

	}

	@Override
	public void mouseReleased(MouseEvent e) {

	}

	@Override
	public void mouseEntered(MouseEvent e) {

	}

	@Override
	public void mouseExited(MouseEvent e) {

	}
}
