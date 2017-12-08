package menu;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.ButtonGroup;
import javax.swing.JCheckBoxMenuItem;
import javax.swing.JFrame;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JRadioButtonMenuItem;

public class Fenetre extends JFrame implements KeyListener{
	private static final long serialVersionUID = 1L;	
	private MenuClassique menuBar = new MenuClassique();
	enum etats {IDLE,DANS_ù};
	etats state=etats.IDLE;
	public static void main(String[] args){
		Fenetre zFen = new Fenetre();
	}
	 public void addNotify() {
	        super.addNotify();
	        requestFocus();
	 }
	 public void keyPressed(KeyEvent e) { }
	    public void keyReleased(KeyEvent e) { }
	    public void keyTyped(KeyEvent e) {
	        char c = e.getKeyChar();
	        System.out.println( "la touche selectionnée est :"+c);
	        switch (state)
	        {
	          case IDLE: if(c=='ù')state=etats.DANS_ù; break;
	          case DANS_ù:if(c=='$')System.out.println("on est dans le mode expert yohoooooo");
	          			  else state=etats.IDLE;
	        	   		  break;
	          default: break;
	        }
	    }

	public Fenetre(){
		this.setSize(400, 600);
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setLocationRelativeTo(null);
		
		this.setJMenuBar(menuBar);
		
		this.setVisible(true);
		addKeyListener(this);
	}
		
}
