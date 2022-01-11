package jfzmMainMenu.screens;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

import jfzmMainMenu.components.Button;
import jfzmMainMenu.components.Frame;
import jfzmMainMenu.components.Label;
import jfzmMainMenu.components.Panel;
import jfzmMainMenu.components.field.FieldButton;
import jfzmMainMenu.components.sfx.ClickSound;
import jfzmMainMenu.main.Config;

public class DuelPanel implements ActionListener {

	private Panel panel;

	public Panel getPanel() {
		return panel;
	}

	private JLabel bg;

	private Button exitButton;

	private Label logo;

	private JFrame frame;

	public DuelPanel(JFrame frame) {

		this.frame = frame;

		panel = new Panel(1920, 1080);

		exitButton = new Button(1600, 0, 230, 70, "Return", 255, 255, 255);
		exitButton.getJComponent().addActionListener(this);
		panel.add(exitButton);

		// ------------------------------------------------------------------
		FieldButton oppD = new FieldButton(1748.75, 53, 138, 201);
		oppD.getJComponent().addActionListener(this);
		panel.add(oppD);
		
		FieldButton oppS1 = new FieldButton(631.5, 123, 138, 201);
		oppS1.getJComponent().addActionListener(this);
		panel.add(oppS1);

		FieldButton oppS2 = new FieldButton(844.5, 123, 138, 201);
		oppS2.getJComponent().addActionListener(this);
		panel.add(oppS2);

		FieldButton oppS3 = new FieldButton(1057.5, 123, 138, 201);
		oppS3.getJComponent().addActionListener(this);
		panel.add(oppS3);

		FieldButton oppS4 = new FieldButton(1270.5, 123, 138, 201);
		oppS4.getJComponent().addActionListener(this);
		panel.add(oppS4);

		FieldButton oppS5 = new FieldButton(1483.5, 123, 138, 201);
		oppS5.getJComponent().addActionListener(this);
		panel.add(oppS5);
		
		FieldButton oppA1 = new FieldButton(631.5, 336, 138, 201);
		oppA1.getJComponent().addActionListener(this);
		panel.add(oppA1);

		FieldButton oppA2 = new FieldButton(844.5, 336, 138, 201);
		oppA2.getJComponent().addActionListener(this);
		panel.add(oppA2);

		FieldButton oppA3 = new FieldButton(1057.5, 336, 138, 201);
		oppA3.getJComponent().addActionListener(this);
		panel.add(oppA3);

		FieldButton oppA4 = new FieldButton(1270.5, 336, 138, 201);
		oppA4.getJComponent().addActionListener(this);
		panel.add(oppA4);

		FieldButton oppA5 = new FieldButton(1483.5, 336, 138, 201);
		oppA5.getJComponent().addActionListener(this);
		panel.add(oppA5);
		
		FieldButton oppD1 = new FieldButton(600, 367.5, 201, 138);
		oppD1.getJComponent().addActionListener(this);
		panel.add(oppD1);

		FieldButton oppD2 = new FieldButton(813, 367.5, 201, 138);
		oppD2.getJComponent().addActionListener(this);
		panel.add(oppD2);

		FieldButton oppD3 = new FieldButton(1026, 367.5, 201, 138);
		oppD3.getJComponent().addActionListener(this);
		panel.add(oppD3);

		FieldButton oppD4 = new FieldButton(1239, 367.5, 201, 138);
		oppD4.getJComponent().addActionListener(this);
		panel.add(oppD4);

		FieldButton oppD5 = new FieldButton(1452, 367.5, 201, 138);
		oppD5.getJComponent().addActionListener(this);
		panel.add(oppD5);
		
		FieldButton pD = new FieldButton(1748.75, 826, 138, 201);
		pD.getJComponent().addActionListener(this);
		panel.add(pD);
		
		FieldButton playerS1 = new FieldButton(631.5, 762, 138, 201);
		playerS1.getJComponent().addActionListener(this);
		panel.add(playerS1);

		FieldButton playerS2 = new FieldButton(844.5, 762, 138, 201);
		playerS2.getJComponent().addActionListener(this);
		panel.add(playerS2);

		FieldButton playerS3 = new FieldButton(1057.5, 762, 138, 201);
		playerS3.getJComponent().addActionListener(this);
		panel.add(playerS3);

		FieldButton playerS4 = new FieldButton(1270.5, 762, 138, 201);
		playerS4.getJComponent().addActionListener(this);
		panel.add(playerS4);

		FieldButton playerS5 = new FieldButton(1483.5, 762, 138, 201);
		playerS5.getJComponent().addActionListener(this);
		panel.add(playerS5);
		
		FieldButton playerA1 = new FieldButton(631.5, 549, 138, 201);
		playerA1.getJComponent().addActionListener(this);
		panel.add(playerA1);

		FieldButton playerA2 = new FieldButton(844.5, 549, 138, 201);
		playerA2.getJComponent().addActionListener(this);
		panel.add(playerA2);

		FieldButton playerA3 = new FieldButton(1057.5, 549, 138, 201);
		playerA3.getJComponent().addActionListener(this);
		panel.add(playerA3);

		FieldButton playerA4 = new FieldButton(1270.5, 549, 138, 201);
		playerA4.getJComponent().addActionListener(this);
		panel.add(playerA4);

		FieldButton playerA5 = new FieldButton(1483.5, 549, 138, 201);
		playerA5.getJComponent().addActionListener(this);
		panel.add(playerA5);
		
		FieldButton playerD1 = new FieldButton(600, 580.5, 201, 138);
		playerD1.getJComponent().addActionListener(this);
		panel.add(playerD1);

		FieldButton playerD2 = new FieldButton(813, 580.5, 201, 138);
		playerD2.getJComponent().addActionListener(this);
		panel.add(playerD2);

		FieldButton playerD3 = new FieldButton(1026, 580.5, 201, 138);
		playerD3.getJComponent().addActionListener(this);
		panel.add(playerD3);

		FieldButton playerD4 = new FieldButton(1239, 580.5, 201, 138);
		playerD4.getJComponent().addActionListener(this);
		panel.add(playerD4);

		FieldButton playerD5 = new FieldButton(1452, 580.5, 201, 138);
		playerD5.getJComponent().addActionListener(this);
		panel.add(playerD5);
		// ------------------------------------------------------------------

		bg = new JLabel();
		ImageIcon icon = new ImageIcon(getClass().getClassLoader().getResource("duelbackground1920x1080.png"));
		bg.setSize(1920, 1080);
		if (Config.res == 2) {
			icon = new ImageIcon(getClass().getClassLoader().getResource("background1280x720.png"));
			bg.setSize(1280, 720);
		}
		bg.setIcon(icon);
		panel.getJComponent().add(bg);

	}

	@Override
	public void actionPerformed(ActionEvent e) {

		new Thread(new ClickSound()).start();

		if (e.getSource() == exitButton.getJComponent()) {
			MenuPanel newPanel = new MenuPanel(frame);
			frame.getContentPane().removeAll();
			frame.getContentPane().add(newPanel.getPanel().getJComponent());
			frame.revalidate();
			newPanel.getPanel().getJComponent().repaint();

//			ImageIcon icon = new ImageIcon(getClass().getClassLoader().getResource("background1920x1080.png"));
//			bg.setIcon(icon);
//			panel.getJComponent().add(bg);

		}
	}

}