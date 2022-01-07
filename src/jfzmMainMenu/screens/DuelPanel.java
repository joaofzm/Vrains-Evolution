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
		FieldButton row1_1 = new FieldButton(600, 123, 138, 201);
		row1_1.getJComponent().addActionListener(this);
		panel.add(row1_1);

		FieldButton row1_2 = new FieldButton(750, 123, 138, 201);
		row1_2.getJComponent().addActionListener(this);
		panel.add(row1_2);

		FieldButton row1_3 = new FieldButton(900, 123, 138, 201);
		row1_3.getJComponent().addActionListener(this);
		panel.add(row1_3);

		FieldButton row1_4 = new FieldButton(1050, 123, 138, 201);
		row1_4.getJComponent().addActionListener(this);
		panel.add(row1_4);

		FieldButton row1_5 = new FieldButton(1200, 123, 138, 201);
		row1_5.getJComponent().addActionListener(this);
		panel.add(row1_5);

		FieldButton row1_6 = new FieldButton(1350, 123, 138, 201);
		row1_6.getJComponent().addActionListener(this);
		panel.add(row1_6);
		
		FieldButton row1_7 = new FieldButton(1500, 123, 138, 201);
		row1_7.getJComponent().addActionListener(this);
		panel.add(row1_7);

		FieldButton row2_1 = new FieldButton(600, 336, 138, 201);
		row2_1.getJComponent().addActionListener(this);
		panel.add(row2_1);

		FieldButton row2_2 = new FieldButton(750, 336, 138, 201);
		row2_2.getJComponent().addActionListener(this);
		panel.add(row2_2);

		FieldButton row2_3 = new FieldButton(900, 336, 138, 201);
		row2_3.getJComponent().addActionListener(this);
		panel.add(row2_3);

		FieldButton row2_4 = new FieldButton(1050, 336, 138, 201);
		row2_4.getJComponent().addActionListener(this);
		panel.add(row2_4);

		FieldButton row2_5 = new FieldButton(1200, 336, 138, 201);
		row2_5.getJComponent().addActionListener(this);
		panel.add(row2_5);

		FieldButton row2_6 = new FieldButton(1350, 336, 138, 201);
		row2_6.getJComponent().addActionListener(this);
		panel.add(row2_6);
		
		FieldButton row2_7 = new FieldButton(1500, 336, 138, 201);
		row2_7.getJComponent().addActionListener(this);
		panel.add(row2_7);
		
		FieldButton row3_1 = new FieldButton(600, 549, 138, 201);
		row3_1.getJComponent().addActionListener(this);
		panel.add(row3_1);

		FieldButton row3_2 = new FieldButton(750, 549, 138, 201);
		row3_2.getJComponent().addActionListener(this);
		panel.add(row3_2);

		FieldButton row3_3 = new FieldButton(900, 549, 138, 201);
		row3_3.getJComponent().addActionListener(this);
		panel.add(row3_3);

		FieldButton row3_4 = new FieldButton(1050, 549, 138, 201);
		row3_4.getJComponent().addActionListener(this);
		panel.add(row3_4);

		FieldButton row3_5 = new FieldButton(1200, 549, 138, 201);
		row3_5.getJComponent().addActionListener(this);
		panel.add(row3_5);

		FieldButton row3_6 = new FieldButton(1350, 549, 138, 201);
		row3_6.getJComponent().addActionListener(this);
		panel.add(row3_6);
		
		FieldButton row3_7 = new FieldButton(1500, 549, 138, 201);
		row3_7.getJComponent().addActionListener(this);
		panel.add(row3_7);
		
		FieldButton row4_1 = new FieldButton(600, 762, 138, 201);
		row4_1.getJComponent().addActionListener(this);
		panel.add(row4_1);

		FieldButton row4_2 = new FieldButton(750, 762, 138, 201);
		row4_2.getJComponent().addActionListener(this);
		panel.add(row4_2);

		FieldButton row4_3 = new FieldButton(900, 762, 138, 201);
		row4_3.getJComponent().addActionListener(this);
		panel.add(row4_3);

		FieldButton row4_4 = new FieldButton(1050, 762, 138, 201);
		row4_4.getJComponent().addActionListener(this);
		panel.add(row4_4);

		FieldButton row4_5 = new FieldButton(1200, 762, 138, 201);
		row4_5.getJComponent().addActionListener(this);
		panel.add(row4_5);

		FieldButton row4_6 = new FieldButton(1350, 762, 138, 201);
		row4_6.getJComponent().addActionListener(this);
		panel.add(row4_6);
		
		FieldButton row4_7 = new FieldButton(1500, 762, 138, 201);
		row4_7.getJComponent().addActionListener(this);
		panel.add(row4_7);
		
		
		// ------------------------------------------------------------------

		bg = new JLabel();
		ImageIcon icon = new ImageIcon(getClass().getClassLoader().getResource("background1920x1080.png"));
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