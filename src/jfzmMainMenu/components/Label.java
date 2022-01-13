package jfzmMainMenu.components;

import java.awt.Color;
import java.awt.Font;
import java.awt.Image;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JLabel;
import javax.swing.SwingConstants;
import javax.swing.border.Border;

import jfzmMainMenu.main.Config;

public class Label implements FrameComponent {

	private JLabel label;

	public Label(double x, double y, double xSize, double ySize, String imageURL) {
		label = new JLabel();
		
		ImageIcon originalIcon = new ImageIcon(getClass().getClassLoader().getResource(imageURL)); 
		Image originalImage = originalIcon.getImage();
		Image resizedImage = originalImage.getScaledInstance((int)(xSize*Config.multiplier),(int) (ySize*Config.multiplier),  java.awt.Image.SCALE_SMOOTH); 
		ImageIcon icon = new ImageIcon(resizedImage);
		
		label.setIcon(icon);
		label.setBounds((int) (x * Config.multiplier), (int) (y * Config.multiplier), (int) (xSize * Config.multiplier),
				(int) (ySize * Config.multiplier));
	}

	public Label(double x, double y, double xSize, double ySize, String text, int fontSize, int red, int green, int blue) {
		label = new JLabel();
		label.setBounds((int) (x * Config.multiplier), (int) (y * Config.multiplier), (int) (xSize * Config.multiplier),
				(int) (ySize * Config.multiplier));
		label.setHorizontalAlignment(SwingConstants.CENTER);
		label.setVerticalAlignment(SwingConstants.CENTER);
		label.setText(text);
		label.setFont(new Font("Visitor TT1 BRK", Font.PLAIN, (int) (fontSize * Config.multiplier)));
		label.setForeground(new Color(red,green,blue));
		
//		label.setBorder(BorderFactory.createLineBorder(Color.BLUE, 5));
	}

	public JLabel getJComponent() {
		return label;
	}

	public void setVisible(boolean value) {
		getJComponent().setVisible(value);
	}
}
