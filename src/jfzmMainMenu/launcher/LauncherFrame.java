package jfzmMainMenu.launcher;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;

import jfzmMainMenu.components.Frame;
import jfzmMainMenu.components.sfx.ClickSound;
import jfzmMainMenu.screens.MenuPanel;

public class LauncherFrame extends JFrame implements ActionListener {

	private JFrame jFrame;
	private JButton startButton;
	private JButton optionsButton;
	private JLabel loading;
	private JButton exitButton;
	
	private JCheckBox borderlessCheck;
	
	private JCheckBox res1280;
	private JCheckBox res1920;

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
		
		JLabel resLabel = new JLabel();
		resLabel.setText("Resolution");
		resLabel.setBounds(225, 50,220,220);
		resLabel.setFont(new Font("Impact", Font.PLAIN, 40));
		resLabel.setForeground(Color.white);
		resLabel.setVisible(true);
		jFrame.add(resLabel);
		
		res1280 = new JCheckBox("1280x720");
		res1280.setVisible(true);
		res1280.setBounds(250,220,120,50);
		res1280.addActionListener(this);
		res1280.setFocusable(false);
		res1280.setFont(new Font("Impact", Font.PLAIN, 20));
		res1280.setBackground(Color.blue);
		res1280.setForeground(Color.white);
		jFrame.add(res1280);
		
		res1920 = new JCheckBox("1920x1080");
		res1920.setVisible(true);
		res1920.setBounds(250,320,120,50);
		res1920.addActionListener(this);
		res1920.setFocusable(false);
		res1920.setFont(new Font("Impact", Font.PLAIN, 20));
		res1920.setBackground(Color.blue);
		res1920.setForeground(Color.white);
		res1920.setSelected(true);
		jFrame.add(res1920);
		
		JLabel otherLabel = new JLabel();
		otherLabel.setText("Other");
		otherLabel.setBounds(560,50,220,220);
		otherLabel.setFont(new Font("Impact", Font.PLAIN, 40));
		otherLabel.setForeground(Color.white);
		otherLabel.setVisible(true);
		jFrame.add(otherLabel);
		
		borderlessCheck = new JCheckBox("Borderless");
		borderlessCheck.setVisible(true);
		borderlessCheck.setBounds(550,220,120,50);
		borderlessCheck.addActionListener(this);
		borderlessCheck.setFocusable(false);
		borderlessCheck.setSelected(true);
		borderlessCheck.setFont(new Font("Impact", Font.PLAIN, 20));
		borderlessCheck.setBackground(Color.cyan);
		borderlessCheck.setForeground(Color.white);
		jFrame.add(borderlessCheck);

		jFrame.pack();
		jFrame.setVisible(true);

	}

	@Override
	public void actionPerformed(ActionEvent e) {

		new Thread(new ClickSound()).start();
		
		if (e.getSource()== res1280) {
			if (res1920.isSelected()) {
				res1920.setSelected(false);
			} 
		}
		
		if (e.getSource()== res1920) {
			if (res1280.isSelected()) {
				res1280.setSelected(false);
			}
		}

		if (e.getSource() == startButton) {
			new Thread() {
				public void run() {
					if (res1280.isSelected()) {
						Config.res=2;
					} else if (res1920.isSelected()){
						Config.res=1;
					} else {
						JOptionPane.showMessageDialog(jFrame, "You must choose one resolution!");
						return;
					}
					
					startButton.setEnabled(false);
					exitButton.setEnabled(false);
					
					Config.borderless=borderlessCheck.isSelected();
					
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


