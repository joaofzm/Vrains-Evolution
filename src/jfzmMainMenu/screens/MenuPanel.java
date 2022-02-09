package jfzmMainMenu.screens;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;

import jfzmMainMenu.components.Button;
import jfzmMainMenu.components.Label;
import jfzmMainMenu.components.Panel;
import jfzmMainMenu.components.sfx.ClickSound;
import jfzmMainMenu.launcher.Config;

public class MenuPanel implements ActionListener {

	private Panel panel;
	public Panel getPanel() {
		return panel;
	}
	
	private JLabel bg;
	
	private Button startButton;
	private Button profileButton;
	private Button decksButton;
	private Button optionsButton;
	private Button exitButton;

	private Label logo;

	private JFrame frame;
	
	public MenuPanel(JFrame frame) {
		
		this.frame=frame;

		panel = new Panel(1920,1080);
		
//		logo = new Label(0, 120, 1920, 200, "VRAINS EVOLUTION",150,255,255,0);
//		panel.add(logo);

		startButton = new Button(884, 450, 152, 70, "Duel",255,255,255);
		startButton.getJComponent().addActionListener(this);
		panel.add(startButton);
		
		profileButton = new Button(840, 550, 240, 70, "Profile",255,255,255);
		profileButton.getJComponent().addActionListener(this);
		panel.add(profileButton);

		decksButton = new Button(858, 650, 204, 80, "Decks",255,255,255);
		decksButton.getJComponent().addActionListener(this);
		panel.add(decksButton);
		
		optionsButton = new Button(822, 750, 276, 80, "Settings",255,255,255);
		optionsButton.getJComponent().addActionListener(this);
		panel.add(optionsButton);

		exitButton = new Button(892, 850, 136, 70, "Exit",255,255,255);
		exitButton.getJComponent().addActionListener(this);
		panel.add(exitButton);
		
		bg = new JLabel();
		
		ImageIcon icon = new ImageIcon(getClass().getClassLoader().getResource("Backgrounds/menubg1920x1080.png"));
		bg.setSize(1920,1080);
		if (Config.res==2) {
			icon = new ImageIcon(getClass().getClassLoader().getResource("Backgrounds/menubg1280x720.png"));
			bg.setSize(1280,720);
		}
		bg.setIcon(icon);
		panel.getJComponent().add(bg);

	}

	@Override
	public void actionPerformed(ActionEvent e) {

		new Thread(new ClickSound()).start();

		if (e.getSource() == startButton.getJComponent()) {
			SelectDeckPanel newPanel = new SelectDeckPanel(frame);
			frame.getContentPane().removeAll();
			frame.getContentPane().add(newPanel.getPanel().getJComponent());
			frame.revalidate();
			newPanel.getPanel().getJComponent().repaint();
		}
		
		if (e.getSource() == profileButton.getJComponent()) {
			DuelPanel newPanel = new DuelPanel(frame);
			frame.getContentPane().removeAll();
			frame.getContentPane().add(newPanel.getPanel().getJComponent());
			frame.revalidate();
			newPanel.getPanel().getJComponent().repaint();
		}
		
		if (e.getSource() == optionsButton.getJComponent()) {
			SettingsPanel newPanel = new SettingsPanel(frame);
			frame.getContentPane().removeAll();
			frame.getContentPane().add(newPanel.getPanel().getJComponent());
			frame.revalidate();
			newPanel.getPanel().getJComponent().repaint();
		}

		if (e.getSource() == exitButton.getJComponent()) {
			try {
				Thread.sleep(900);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}
			System.exit(0);
		}
	}

}