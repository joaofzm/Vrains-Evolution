package jfzmMainMenu.components.sfx;

public class ClickSound implements Runnable {

	private SoundEffectConverter soundEffectConverter = new SoundEffectConverter();
	String soundPath = "/SFX/clickSound.wav";


	@Override
	public void run() {
		soundEffectConverter.setFile(soundPath);
		soundEffectConverter.play();
	}

}
