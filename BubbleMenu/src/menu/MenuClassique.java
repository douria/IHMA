package menu;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ButtonGroup;
import javax.swing.JCheckBoxMenuItem;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JRadioButtonMenuItem;

public class MenuClassique extends JMenuBar{
	
	private JMenu test1 = new JMenu("File");
	private JMenu test1_1 = new JMenu("New");
	private JMenu test1_2 = new JMenu("Send");
	private JMenu test2 = new JMenu("Edit");
	
	// Menu File
	private JMenuItem item1 = new JMenuItem("Open");
	private JMenuItem item2 = new JMenuItem("Close");
	private JMenuItem item3 = new JMenuItem("Reload");
	private JMenuItem item4 = new JMenuItem("Version");
	private JMenuItem item5 = new JMenuItem("Save");
	private JMenuItem item6 = new JMenuItem("Save As...");
	private JMenuItem item7 = new JMenuItem("Save a Copy");
	private JMenuItem item8 = new JMenuItem("Save All");
	private JMenuItem item9 = new JMenuItem("Export");
	private JMenuItem item10 = new JMenuItem("Export As PDF");
	private JMenuItem item11 = new JMenuItem("Preview");
	private JMenuItem item12 = new JMenuItem("Print Preview");
	private JMenuItem item13 = new JMenuItem("Print ...");
	private JMenuItem item14 = new JMenuItem("Printer Settings...");
	private JMenuItem item15 = new JMenuItem("Properties");
	private JMenuItem item16 = new JMenuItem("Digital Signatures");
	private JMenuItem item17 = new JMenuItem("Exit");
	
	// SubMenu File-> New
	private JMenuItem item18 = new JMenuItem("Text Document");
	private JMenuItem item19 = new JMenuItem("Presentation");
	private JMenuItem item20 = new JMenuItem("Drawing");
	private JMenuItem item21 = new JMenuItem("HTML Document");
	private JMenuItem item22 = new JMenuItem("XML form Document");
	private JMenuItem item23 = new JMenuItem("Master Document");
	private JMenuItem item24 = new JMenuItem("Formula");
	private JMenuItem item25 = new JMenuItem("Labels");
	private JMenuItem item26 = new JMenuItem("Business Card");
	private JMenuItem item27 = new JMenuItem("Templates");
	
	// SubMenu File-> Send
	private JMenuItem item28 = new JMenuItem("Email Document");
	private JMenuItem item29 = new JMenuItem("Email as OpenDocument text");
	private JMenuItem item30 = new JMenuItem("Email as Microsoft Word");
	private JMenuItem item31 = new JMenuItem("Email as PDF");
	private JMenuItem item32 = new JMenuItem("Send via Bluetooth");
	private JMenuItem item33 = new JMenuItem("Create Master Document");
	private JMenuItem item34 = new JMenuItem("Create HTML Document");
	
	// Menu Edit
	private JMenuItem item35 = new JMenuItem("Undo");
	private JMenuItem item36 = new JMenuItem("Redo");
	private JMenuItem item37 = new JMenuItem("Repeat");
	private JMenuItem item38 = new JMenuItem("Cut");
	private JMenuItem item39 = new JMenuItem("copy");
	private JMenuItem item40 = new JMenuItem("Paste");
	private JMenuItem item41 = new JMenuItem("Paste special");
	private JMenuItem item42 = new JMenuItem("Select All");
	private JMenuItem item43 = new JMenuItem("Select text");
	private JMenuItem item44 = new JMenuItem("Direct Cursor Mode");
	private JMenuItem item45 = new JMenuItem("Find ...");
	private JMenuItem item46 = new JMenuItem("Find & Replace ...");
	private JMenuItem item47 = new JMenuItem("Go to Page");

	
	private JCheckBoxMenuItem jcmi1 = new JCheckBoxMenuItem("Design Mode");
	private JCheckBoxMenuItem jcmi2 = new JCheckBoxMenuItem("Edit Mode");
	
	private JRadioButtonMenuItem jrmi1 = new JRadioButtonMenuItem("Design Mode1");
	private JRadioButtonMenuItem jrmi2 = new JRadioButtonMenuItem("Edit Mode");
	
	public MenuClassique(){
		
		//On initialise nos menus
		// SubMenu New
		this.test1_1.add(item18);
	    this.test1_1.add(item19);
	    this.test1_1.add(item20);
	    this.test1_1.add(item21);
	    this.test1_1.add(item22);
	    this.test1_1.add(item23);
	    this.test1_1.add(item24);
	    this.test1_1.add(item25);
	    this.test1_1.add(item26);
	    this.test1_1.add(item27);
	    
	    //Ajout de New dans File
	    this.test1.add(this.test1_1);
	    
	    this.test1.add(item1);  
	    this.test1.add(item2);  
	    this.test1.add(item3);
	    this.test1.add(item4);
	    this.test1.add(item5);  
	    this.test1.add(item6);  
	    this.test1.add(item7);
	    this.test1.add(item8);
	    this.test1.add(item9);  
	    this.test1.add(item10);
	    
	    //SubMenu Send
	    this.test1_2.add(item28);
	    this.test1_2.add(item29);
	    this.test1_2.add(item30);
	    this.test1_2.add(item31);
	    this.test1_2.add(item32);
	    this.test1_2.add(item34);
	    
	    //Ajout de Send dans File
	    this.test1.add(this.test1_2);
	    
	    this.test1.add(item11);  
	    this.test1.add(item12);  
	    this.test1.add(item13);
	    this.test1.add(item14);
	    this.test1.add(item15);  
	    this.test1.add(item16);  
	    this.test1.add(item17);

	    // Menu Edit
	    this.test2.add(item35);  
	    this.test2.add(item36);  
	    this.test2.add(item37);
	    this.test2.add(item38);
	    this.test2.add(item39);  
	    this.test2.add(item40);
	    this.test2.add(item41);
	    this.test2.add(item42);
	    this.test2.add(item43);
	    this.test2.add(item44);
	    this.test2.add(item45);
	    this.test2.add(item46);
	    this.test2.add(item47);
	    
	    //Ajout d'un séparateur
	    this.test2.addSeparator();
	    
	    //On met nos radios dans un ButtonGroup
	    ButtonGroup bg = new ButtonGroup();
	    bg.add(jrmi1);
	    bg.add(jrmi2);
	    //On présélectionne la première radio
	    jrmi2.setSelected(true);
	
	    this.test2.add(jrmi1);
	    this.test2.add(jrmi2);
	    
	    item17.addActionListener(new ActionListener(){
	      public void actionPerformed(ActionEvent arg0) {
	        System.exit(0);
	      }        
	    });
	    
	
	    //L'ordre d'ajout va déterminer l'ordre d'apparition dans le menu de gauche à droite
	    //Le premier ajouté sera tout à gauche de la barre de menu et inversement pour le dernier
	    this.add(test1);
	    this.add(test2);
	    
	    this.setVisible(true);
	}

}
