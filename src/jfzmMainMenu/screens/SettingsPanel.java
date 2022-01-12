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
import jfzmMainMenu.components.sfx.ClickSound;
import jfzmMainMenu.main.Config;

public class SettingsPanel implements ActionListener {

	private Panel panel;

	public Panel getPanel() {
		return panel;
	}

	private JLabel bg;

	private Button exitButton;

	private Label logo;

	private JFrame frame;

	public SettingsPanel(JFrame frame) {

		this.frame = frame;

		panel = new Panel(1920, 1080);

		logo = new Label(0, 0, 1920, 200, "SETTINGS", 150, 255, 255, 0);
		panel.add(logo);

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