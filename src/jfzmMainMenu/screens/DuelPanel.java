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
import jfzmMainMenu.launcher.Config;

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
		
		FieldButton pD = new FieldButton(1399, 788, 100, 146);
		pD.getJComponent().addActionListener(this);
		panel.add(pD);
		
		FieldButton pGY = new FieldButton(1399, 632, 100, 146);
		pGY.getJComponent().addActionListener(this);
		panel.add(pGY);
		
		FieldButton pB = new FieldButton(1399, 476, 100, 146);
		pB.getJComponent().addActionListener(this);
		panel.add(pB);
		
		FieldButton pED = new FieldButton(456, 788, 100, 146);
		pED.getJComponent().addActionListener(this);
		panel.add(pED);
		
		FieldButton pF = new FieldButton(480, 577, 100, 146);
		pF.getJComponent().addActionListener(this);
		panel.add(pF);
		
		FieldButton pM1 = new FieldButton(616, 577, 100, 146);
		pM1.getJComponent().addActionListener(this);
		panel.add(pM1);
		FieldButton pMD1 = new FieldButton(593, 600, 146, 100);
		pMD1.getJComponent().addActionListener(this);
		panel.add(pMD1);
		
		FieldButton pM2 = new FieldButton(772, 577, 100, 146);
		pM2.getJComponent().addActionListener(this);
		panel.add(pM2);
		FieldButton pMD2 = new FieldButton(749, 600, 146, 100);
		pMD2.getJComponent().addActionListener(this);
		panel.add(pMD2);
		
		FieldButton pMD3 = new FieldButton(905, 600, 146, 100);
		pMD3.getJComponent().addActionListener(this);
		panel.add(pMD3);
		FieldButton pM3 = new FieldButton(928, 577, 100, 146);
		pM3.getJComponent().addActionListener(this);
		panel.add(pM3);
		
		FieldButton pMD4 = new FieldButton(1061, 600, 146, 100);
		pMD4.getJComponent().addActionListener(this);
		panel.add(pMD4);
		FieldButton pM4 = new FieldButton(1084, 577, 100, 146);
		pM4.getJComponent().addActionListener(this);
		panel.add(pM4);
		
		FieldButton pMD5 = new FieldButton(1217, 600, 146, 100);
		pMD5.getJComponent().addActionListener(this);
		panel.add(pMD5);
		FieldButton pM5 = new FieldButton(1240, 577, 100, 146);
		pM5.getJComponent().addActionListener(this);
		panel.add(pM5);
		
		FieldButton pS1 = new FieldButton(616, 733, 100, 146);
		pS1.getJComponent().addActionListener(this);
		panel.add(pS1);
		
		FieldButton pS2 = new FieldButton(772, 733, 100, 146);
		pS2.getJComponent().addActionListener(this);
		panel.add(pS2);
		
		FieldButton pS3 = new FieldButton(928, 733, 100, 146);
		pS3.getJComponent().addActionListener(this);
		panel.add(pS3);
		
		FieldButton pS4 = new FieldButton(1084, 733, 100, 146);
		pS4.getJComponent().addActionListener(this);
		panel.add(pS4);
		
		FieldButton pS5 = new FieldButton(1240, 733, 100, 146);
		pS5.getJComponent().addActionListener(this);
		panel.add(pS5);
		
		// ------------------------------------------------------------------

		FieldButton oppD = new FieldButton(456, 53, 100, 146);
		oppD.getJComponent().addActionListener(this);
		panel.add(oppD);
		
		FieldButton oppGY = new FieldButton(456, 209, 100, 146);
		oppGY.getJComponent().addActionListener(this);
		panel.add(oppGY);
		
		FieldButton oppB = new FieldButton(456, 365, 100, 146);
		oppB.getJComponent().addActionListener(this);
		panel.add(oppB);
		
		FieldButton oppED = new FieldButton(1399, 53, 100, 146);
		oppED.getJComponent().addActionListener(this);
		panel.add(oppED);
		
		FieldButton oppF = new FieldButton(1376, 263, 100, 146);
		oppF.getJComponent().addActionListener(this);
		panel.add(oppF);
		
		FieldButton oppM1 = new FieldButton(616, 263, 100, 146);
		oppM1.getJComponent().addActionListener(this);
		panel.add(oppM1);
		FieldButton oppMD1 = new FieldButton(593, 286, 146, 100);
		oppMD1.getJComponent().addActionListener(this);
		panel.add(oppMD1);
		
		FieldButton oppM2 = new FieldButton(772, 263, 100, 146);
		oppM2.getJComponent().addActionListener(this);
		panel.add(oppM2);
		FieldButton oppMD2 = new FieldButton(749, 286, 146, 100);
		oppMD2.getJComponent().addActionListener(this);
		panel.add(oppMD2);
		
		FieldButton oppM3 = new FieldButton(928, 263, 100, 146);
		oppM3.getJComponent().addActionListener(this);
		panel.add(oppM3);
		FieldButton oppMD3 = new FieldButton(905, 286, 146, 100);
		oppMD3.getJComponent().addActionListener(this);
		panel.add(oppMD3);
		
		FieldButton oppM4 = new FieldButton(1084, 263, 100, 146);
		oppM4.getJComponent().addActionListener(this);
		panel.add(oppM4);
		FieldButton oppMD4 = new FieldButton(1061, 286, 146, 100);
		oppMD4.getJComponent().addActionListener(this);
		panel.add(oppMD4);
		
		FieldButton oppM5 = new FieldButton(1240, 263, 100, 146);
		oppM5.getJComponent().addActionListener(this);
		panel.add(oppM5);
		FieldButton oppMD5 = new FieldButton(1217, 286, 146, 100);
		oppMD5.getJComponent().addActionListener(this);
		panel.add(oppMD5);
		
		FieldButton oppS1 = new FieldButton(616, 107, 100, 146);
		oppS1.getJComponent().addActionListener(this);
		panel.add(oppS1);
		
		FieldButton oppS2 = new FieldButton(772, 107, 100, 146);
		oppS2.getJComponent().addActionListener(this);
		panel.add(oppS2);
		
		FieldButton oppS3 = new FieldButton(928, 107, 100, 146);
		oppS3.getJComponent().addActionListener(this);
		panel.add(oppS3);
		
		FieldButton oppS4 = new FieldButton(1084, 107, 100, 146);
		oppS4.getJComponent().addActionListener(this);
		panel.add(oppS4);
		
		FieldButton oppS5 = new FieldButton(1240, 107, 100, 146);
		oppS5.getJComponent().addActionListener(this);
		panel.add(oppS5);
		
		// ------------------------------------------------------------------
		
		FieldButton e1 = new FieldButton(772, 420, 100, 146);
		e1.getJComponent().addActionListener(this);
		panel.add(e1);
		
		FieldButton e2 = new FieldButton(1084, 420, 100, 146);
		e2.getJComponent().addActionListener(this);
		panel.add(e2);
		
		// ------------------------------------------------------------------


		bg = new JLabel();
		ImageIcon icon = new ImageIcon(getClass().getClassLoader().getResource("Backgrounds/duelbackground1920x1080.png"));
		bg.setSize(1920, 1080);
		if (Config.res == 2) {
			icon = new ImageIcon(getClass().getClassLoader().getResource("Backgrounds/duelbackground1280x720.png"));
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