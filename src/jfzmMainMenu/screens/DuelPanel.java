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

		exitButton = new Button(1600, 0, 230, 70, "Return",255,255,255);
		exitButton.getJComponent().addActionListener(this);
		panel.add(exitButton);
		
		//------------------------------------------------------------------
		FieldButton tst = new FieldButton(600, 678.5, 153, 223);
		tst.getJComponent().addActionListener(this);
		panel.add(tst);
		
		FieldButton tst2 = new FieldButton(800, 678.5, 153, 223);
		tst2.getJComponent().addActionListener(this);
		panel.add(tst2);
		
		FieldButton tst3 = new FieldButton(1000, 678.5, 153, 223);
		tst3.getJComponent().addActionListener(this);
		panel.add(tst3);
		
		FieldButton tst4 = new FieldButton(1200, 678.5, 153, 223);
		tst4.getJComponent().addActionListener(this);
		panel.add(tst4);
		
		FieldButton tst5 = new FieldButton(1400, 678.5, 153, 223);
		tst5.getJComponent().addActionListener(this);
		panel.add(tst5);
		
		FieldButton tst6 = new FieldButton(1600, 678.5, 153, 223);
		tst6.getJComponent().addActionListener(this);
		panel.add(tst6);
		
		FieldButton ftst = new FieldButton(1100, 428.5, 153, 223);
		ftst.getJComponent().addActionListener(this);
		panel.add(ftst);
		
		FieldButton otst = new FieldButton(600, 178.5, 153, 223);
		otst.getJComponent().addActionListener(this);
		panel.add(otst);
		
		FieldButton otst2 = new FieldButton(800, 178.5, 153, 223);
		otst2.getJComponent().addActionListener(this);
		panel.add(otst2);
		
		FieldButton otst3 = new FieldButton(1000, 178.5, 153, 223);
		otst3.getJComponent().addActionListener(this);
		panel.add(otst3);
		
		FieldButton otst4 = new FieldButton(1200, 178.5, 153, 223);
		otst4.getJComponent().addActionListener(this);
		panel.add(otst4);
		
		FieldButton otst5 = new FieldButton(1400, 178.5, 153, 223);
		otst5.getJComponent().addActionListener(this);
		panel.add(otst5);
		
		FieldButton otst6 = new FieldButton(1600, 178.5, 153, 223);
		otst6.getJComponent().addActionListener(this);
		panel.add(otst6);
		//------------------------------------------------------------------

		
		bg = new JLabel();
		ImageIcon icon = new ImageIcon(getClass().getClassLoader().getResource("background1920x1080.png"));
		bg.setSize(1920,1080);
		if (Config.res==2) {
			icon = new ImageIcon(getClass().getClassLoader().getResource("background1280x720.png"));
			bg.setSize(1280,720);
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
		}
	}

}