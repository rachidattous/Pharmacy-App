package metier;

import java.sql.Time;
import java.util.List;

public class commande {
     private int id_cmd;
     private java.sql.Date sqlDate;
	 public int getId_cmd() {
		return id_cmd;
	}
	public void setId_cmd(int id_cmd) {
		this.id_cmd = id_cmd;
	}
	public java.sql.Date getSqlDate() {
		return sqlDate;
	}
	public void setSqlDate(java.sql.Date sqlDate) {
		this.sqlDate = sqlDate;
	}
	public Time getSqlTime() {
		return sqlTime;
	}
	public void setSqlTime(Time time) {
		this.sqlTime = time;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public Client getCl() {
		return cl;
	}
	public void setCl(Client cl) {
		this.cl = cl;
	}
	public List<Panier> getPaniers() {
		return paniers;
	}
	public void setPaniers(List<Panier> paniers) {
		this.paniers = paniers;
	}
	private Time sqlTime;
	 private boolean status;
     private Client cl;
	 private List<Panier> paniers;	 
}
