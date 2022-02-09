package jfzmMainMenu.launcher;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;

import jfzmMainMenu.components.Frame;
import jfzmMainMenu.components.sfx.ClickSound;
import jfzmMainMenu.screens.MenuPanel;

public class LauncherFrame extends JFrame implements ActionListener {

	private JFrame jFrame;
	private JButton startButton;
	private JButton optionsButton;
	private JLabel loading;
	private JButton exitButton;

	public LauncherFrame() {

		jFrame = new JFrame();
		jFrame.setContentPane(
				new JLabel(new ImageIcon(getClass().getClassLoader().getResource("Backgrounds/launcherbg.png"))));
		jFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		jFrame.setLayout(null);
		ImageIcon windowIcon = new ImageIcon(getClass().getClassLoader().getResource("windowIcon.jpg"));
		jFrame.setIconImage(windowIcon.getImage());
		jFrame.setTitle("Into the Vrains - Launcher");
		jFrame.setResizable(false);
		jFrame.setSize(896, 504);
		jFrame.setLocationRelativeTo(null);

		startButton = new JButton();
		startButton.setBounds(20, 430, 550, 50);
		startButton.addActionListener(this);
		startButton.setText("LAUNCH");
		startButton.setFont(new Font("Impact", Font.BOLD, 32));
		startButton.setForeground(Color.white);
		startButton.setBackground(new Color(30, 30, 255));
		startButton.setBorder(BorderFactory.createLineBorder(Color.white));
		startButton.setFocusable(false);
		jFrame.add(startButton);

		exitButton = new JButton();
		exitButton.setBounds(625, 430, 250, 50);
		exitButton.addActionListener(this);
		exitButton.setText("EXIT");
		exitButton.setFont(new Font("Impact", Font.BOLD, 32));
		exitButton.setForeground(Color.white);
		exitButton.setBackground(new Color(255, 0, 0));
		exitButton.setBorder(BorderFactory.createLineBorder(Color.white));
		exitButton.setFocusable(false);
		jFrame.add(exitButton);

		jFrame.pack();
		jFrame.setVisible(true);

	}

	@Override
	public void actionPerformed(ActionEvent e) {

		new Thread(new ClickSound()).start();

		if (e.getSource() == startButton) {
			startButton.setEnabled(false);
			exitButton.setEnabled(false);
			new Thread() {
				public void run() {
					jFrame.dispose();
					
					Config.setMultiplier();
					Frame frame = new Frame(Config.x, Config.y);
					MenuPanel initialPanel = new MenuPanel(frame.getJFrame());
					frame.getJFrame().getContentPane().removeAll();
					frame.getJFrame().getContentPane().add(initialPanel.getPanel().getJComponent());
					frame.getJFrame().revalidate();
					initialPanel.getPanel().getJComponent().repaint();
					
				}
			}.start();
		}

		if (e.getSource() == optionsButton) {
			
		}

		if (e.getSource() == exitButton) {
			try {
				Thread.sleep(600);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}
			System.exit(0);
		}

	}

}
