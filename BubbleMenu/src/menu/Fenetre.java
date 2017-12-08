package menu;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.ButtonGroup;
import javax.swing.JCheckBoxMenuItem;
import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JRadioButtonMenuItem;

public class Fenetre extends JFrame{
	private static final long serialVersionUID = 1L;	
	private MenuClassique menuBar = new MenuClassique();

	public static void main(String[] args){
		Fenetre zFen = new Fenetre();
	}
	
	public Fenetre(){
		this.setSize(400, 600);
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setLocationRelativeTo(null);
		
		this.setJMenuBar(menuBar);
		
		this.setVisible(true);
	}
		
}
