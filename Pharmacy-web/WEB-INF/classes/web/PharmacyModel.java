package web;

import java.util.ArrayList;
import java.util.List;

import metier.Pharmacy;

public class PharmacyModel {
       private Pharmacy pharmacie;
       List<Pharmacy> AllPharmacy=new ArrayList<Pharmacy>();
       public Pharmacy getPharmacie() {
		return pharmacie;
	   }
	   public void setPharmacie(Pharmacy pharmacie) {
		this.pharmacie = pharmacie;
	   }
	   public List<Pharmacy> getAllPharmacy() {
		return AllPharmacy;
	   }
	   public void setAllPharmacy(List<Pharmacy> allPharmacy) {
		AllPharmacy = allPharmacy;
	   }	   
}
