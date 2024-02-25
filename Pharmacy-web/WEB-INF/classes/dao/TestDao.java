package dao;

import metier.Pharmacy;

public class TestDao {
 
	public static void main(String[] args) {
		PharmacyDaoImpl dao=new PharmacyDaoImpl();
		//Pharmacy Ph=new Pharmacy("Pharmacy Tilula","+212677485186","Tilila agadir",33.22,32.22);
		//dao.AddPharmacy(Ph);
		  for (Pharmacy P:dao.getAllPharmacy()) {
		      System.out.println(P.getName());
	}
}}
