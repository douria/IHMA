package menu;

import java.awt.Color;
import javax.swing.JMenuItem;

public class ItemFavoris extends JMenuItem{
	Color bgColor=Color.CYAN;

    public ItemFavoris(String string) {
		// TODO Auto-generated constructor stub
    	super(string);
    	this.setBackground(bgColor);
	}

	public void setColor(Color color) {
        bgColor=color;
    }

}
