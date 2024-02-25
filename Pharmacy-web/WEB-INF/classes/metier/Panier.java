package metier;

public class Panier {
	private Medication medication;
    private int Qte;
    
	public Panier() {
		super();
	}
	public Panier(Medication medication, int qte) {
		super();
		this.medication = medication;
		Qte = qte;
	}
	public Medication getMedication() {
		return medication;
	}
	public void setMedication(Medication medication) {
		this.medication = medication;
	}
	public int getQte() {
		return Qte;
	}
	public void setQte(int qte) {
		Qte = qte;
	}
}
