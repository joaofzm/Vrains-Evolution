package jfzmMainMenu.launcher;

public class Config {

	public static boolean borderless = true;
	public static int res = 1;
	
	public static int x;
	public static int y;
	public static double multiplier;
	
	public static void setMultiplier() {
		if (res==1) {
			multiplier=1;
			x=1920;
			y=1080;
		} else if (res==2) {
			multiplier=0.666666666666666666666666;
			x=1280;
			y=720;
		}
	}
}
