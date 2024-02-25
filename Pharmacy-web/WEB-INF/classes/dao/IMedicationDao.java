package dao;

import java.util.List;

import metier.Medication;
import metier.commande;

public interface IMedicationDao {
     public void AddMedication(Medication Med,long pharmaId);
     public List<Medication> GetAllMedications(long Id);
     public Medication GetMedication(double Id);
     public void UpdateMedication(Medication Med,double Id);
     public void DeleteMedication(double Id);
     public void DetailsMedication(double Id);
     public List<commande> GetCommande(long IdPh);
     public commande DetailCommande(long id_cmd);
     public double totalcmd(commande cmd);
     public void TreatedOrder(long id_cmd);
     public List<Medication> SearchMedication(String motcle);
     public List<Medication> MedicationByCategorie(String Cat);
}
