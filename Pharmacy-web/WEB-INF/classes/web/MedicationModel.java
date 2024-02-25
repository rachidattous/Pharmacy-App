package web;

import java.util.ArrayList;
import java.util.List;

import metier.Medication;

public class MedicationModel {
	private Medication medication;
    List<Medication> AllMedication=new ArrayList<Medication>();
	   public List<Medication> getAllMedication() {
		return AllMedication;
	   }
	   public void setAllMedication(List<Medication> allMedication) {
		   AllMedication = allMedication;
	   }
	   public Medication getMedication() {
		return medication;
	   }
	   public void setMedication(Medication medication) {
		this.medication = medication;
	   }	   
}
