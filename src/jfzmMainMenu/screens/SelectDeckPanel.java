package jfzmMainMenu.screens;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;

import jfzmMainMenu.components.Button;
import jfzmMainMenu.components.ImageButton;
import jfzmMainMenu.components.Label;
import jfzmMainMenu.components.Panel;
import jfzmMainMenu.components.sfx.ClickSound;
import jfzmMainMenu.main.Config;

public class SelectDeckPanel implements ActionListener {

	private Panel panel;

	public Panel getPanel() {
		return panel;
	}

	private JLabel bg;

	private Button exitButton;

	private Label logo;
	
	private ImageButton nessie;
	private ImageButton aleister;
	private ImageButton talker;
	private ImageButton levieneer;

	private JFrame frame;

	public SelectDeckPanel(JFrame frame) {

		this.frame = frame;

		panel = new Panel(1920, 1080);

		logo = new Label(0, 0, 1920, 200, "CHOOSE YOUR DECK", 150, 255, 255, 0);
		panel.add(logo);
		
		nessie = new ImageButton(80, 250, 400, 650, "Menu Components/nessie.png");
		nessie.getJComponent().addActionListener(this);
		panel.add(nessie);
		
		aleister = new ImageButton(530, 250, 400, 650, "Menu Components/aleister.png");
		aleister.getJComponent().addActionListener(this);
		panel.add(aleister);
		
		talker = new ImageButton(980, 250, 400, 650, "Menu Components/locked.png");
		talker.getJComponent().addActionListener(this);
		panel.add(talker);
		
		levieneer = new ImageButton(1430, 250, 400, 650, "Menu Components/locked.png");
		levieneer.getJComponent().addActionListener(this);
		panel.add(levieneer);
		
		exitButton = new Button(845, 980, 230, 70, "Return",255,255,255);
		exitButton.getJComponent().addActionListener(this);
		panel.add(exitButton);
		
		bg = new JLabel();
		
		ImageIcon icon = new ImageIcon(getClass().getClassLoader().getResource("Backgrounds/bg1920x1080.png"));
		bg.setSize(1920,1080);
		if (Config.res==2) {
			icon = new ImageIcon(getClass().getClassLoader().getResource("Backgrounds/bg1280x720.png"));
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