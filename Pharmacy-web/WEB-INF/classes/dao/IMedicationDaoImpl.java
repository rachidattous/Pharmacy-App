package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import metier.Client;
import metier.Medication;
import metier.Panier;
import metier.commande;

public class IMedicationDaoImpl implements IMedicationDao{

	@Override
	public void AddMedication(Medication Med,long id) {
        Connection connection=SingletonConnection.getConnection();
        try {
			PreparedStatement ps=connection.prepareStatement
					("INSERT INTO medication(name,price,description,image,categorie,PharmaId) VALUES(?,?,?,?,?,?)");
			 ps.setString(1,Med.getName());
			 ps.setDouble(2,Med.getPrice());
			 ps.setString(3,Med.getDescription());
			 ps.setString(4,Med.getImage());
			 ps.setString(5,Med.getCategorie());
			 ps.setLong(6, id);
	         ps.executeUpdate();
			 ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	    }

	@Override
	public List<Medication> GetAllMedications(long Id) {
         Connection connection=SingletonConnection.getConnection();
         List<Medication> Medications = new ArrayList<Medication>(); 
		try {
	         PreparedStatement ps= connection.prepareStatement("SELECT * FROM medication WHERE PharmaId=?");
			 ps.setLong(1,Id);
	 		 ResultSet rs=ps.executeQuery();
	 		while(rs.next()) {
				Medication Med=new Medication();
				Med.setId_medication(rs.getInt("Id_medication"));
				Med.setName(rs.getString("name"));
			    Med.setPrice(rs.getDouble("price"));
			    Med.setCategorie(rs.getString("categorie"));
			    Med.setDescription(rs.getString("description"));
			    Med.setImage(rs.getString("image"));
				Medications.add(Med);
			}

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

         
		return Medications;
	}

	@Override
	public Medication GetMedication(double Id) {
		Medication Med = new Medication();
		  Connection connection=SingletonConnection.getConnection();
			try {
		         PreparedStatement ps= connection.prepareStatement("SELECT * FROM medication WHERE Id_medication=?");
				 ps.setDouble(1,Id);
		 		 ResultSet rs=ps.executeQuery();
		 		while(rs.next()) {
					Med.setId_medication(rs.getInt("Id_medication"));
					Med.setName(rs.getString("name"));
				    Med.setPrice(rs.getDouble("price"));
				    Med.setCategorie(rs.getString("categorie"));
				    Med.setDescription(rs.getString("description"));
				    Med.setImage(rs.getString("image"));
				}

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return Med;
	}

	@Override
	public void UpdateMedication(Medication Med,double Id) {
		 Connection connection=SingletonConnection.getConnection();
	        try {
				 PreparedStatement ps=connection.prepareStatement
				("UPDATE medication SET name=?,price=?,description=?,image=?,categorie=? WHERE Id_medication=?");
				 ps.setString(1,Med.getName());
				 ps.setDouble(2,Med.getPrice());
				 ps.setString(3,Med.getDescription());
				 ps.setString(4,Med.getImage());
				 ps.setString(5,Med.getCategorie());
	             ps.setDouble(6,Id);
	             ps.executeUpdate();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
      		
	}
	@Override
	public void DeleteMedication(double Id) {
		  Connection connection=SingletonConnection.getConnection();
			try {
				PreparedStatement ps=connection.prepareStatement("DELETE FROM medication WHERE Id_medication=?");
				ps.setDouble(1, Id);
	            ps.executeUpdate();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
					
	}

	@Override
	public void DetailsMedication(double Id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<commande> GetCommande(long IdPh) {
		  Connection connection=SingletonConnection.getConnection();
		  List<commande> commandes = new ArrayList<>();
		  List<Panier> panniers = new ArrayList<>();
		  try {
		         PreparedStatement ps= connection.prepareStatement("SELECT * FROM commande WHERE pharmacyID = ?");
				 ps.setLong(1,IdPh);
		 		 ResultSet rs=ps.executeQuery();
		 		while(rs.next()) {
		 			commande cmd = new commande();
		 			int id_cmd=rs.getInt("id_cmd");
		 			cmd.setId_cmd(rs.getInt("id_cmd"));
		 			cmd.setSqlDate(rs.getDate("date"));
		 			cmd.setSqlTime(rs.getTime("heure"));
		 			cmd.setStatus(rs.getBoolean("status"));
		 			int id_client = rs.getInt("id_client");
			        PreparedStatement ps1= connection.prepareStatement("SELECT * FROM client WHERE id_client = ?");
					ps1.setInt(1,id_client);
			 		ResultSet rs1=ps1.executeQuery();
			 		while(rs1.next()) {
                    Client cl = new Client();
                    cl.setId_client(id_client);
		 			cl.setNom(rs1.getString("nom"));
		 			cl.setPrenom(rs1.getString("prenom"));
		 			cl.setEmail(rs1.getString("email"));
		 			cl.setAddress(rs1.getString("address"));
		 			cl.setTel(rs1.getString("tel"));
		 			cmd.setCl(cl);
		 		    }
			 		 Panier p = new Panier();
			 		 PreparedStatement ps2= connection.prepareStatement("SELECT * FROM ligne_cmd WHERE id_cmd = ?");
					 ps2.setInt(1,id_cmd);
				 	 ResultSet rs2=ps2.executeQuery();
				 		while(rs2.next()) {
				 		 int id_medication=rs2.getInt("id_medication");
				 		 PreparedStatement ps3= connection.prepareStatement("SELECT * FROM medication WHERE id_medication = ?");
						 ps3.setInt(1,id_medication);
					 	 ResultSet rs3=ps3.executeQuery();
					 	 while(rs3.next()) {
                          Medication Med = new Medication();
                          Med.setId_medication(id_medication);
                          Med.setPrice(rs3.getInt("price"));
                          Med.setName(rs3.getString("name"));
                          Med.setCategorie(rs3.getString("categorie"));
                          Med.setDescription(rs3.getString("description"));
                          Med.setImage(rs3.getString("image"));
                          p.setMedication(Med);
				 	      }
					 	  p.setQte(rs2.getInt("qte"));
					 	  panniers.add(p); 
		 		        }
				 		 commandes.add(cmd);
				}
		 		} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();}
		return commandes;
		
	}

	@Override
	public commande DetailCommande(long id_cmd) {
		  Connection connection=SingletonConnection.getConnection();
		  List<Panier> panniers = new ArrayList<>();
			commande cmd = new commande();
		  try {
		         PreparedStatement ps= connection.prepareStatement("SELECT * FROM commande WHERE id_cmd = ?");
				 ps.setLong(1,id_cmd);
		 		 ResultSet rs=ps.executeQuery();
		 		while(rs.next()) {
		 			cmd.setId_cmd(rs.getInt("id_cmd"));
		 			cmd.setSqlDate(rs.getDate("date"));
		 			cmd.setSqlTime(rs.getTime("heure"));
		 			cmd.setStatus(rs.getBoolean("status"));
		 			int id_client = rs.getInt("id_client");
			        PreparedStatement ps1= connection.prepareStatement("SELECT * FROM client WHERE id_client = ?");
					ps1.setInt(1,id_client);
			 		ResultSet rs1=ps1.executeQuery();
			 		while(rs1.next()) {
                  Client cl = new Client();
                  cl.setId_client(id_client);
		 			cl.setNom(rs1.getString("nom"));
		 			cl.setPrenom(rs1.getString("prenom"));
		 			cl.setEmail(rs1.getString("email"));
		 			cl.setAddress(rs1.getString("address"));
		 			cl.setTel(rs1.getString("tel"));
		 			cmd.setCl(cl);
		 		    }
			 		 PreparedStatement ps2= connection.prepareStatement("SELECT * FROM ligne_cmd WHERE id_cmd = ?");
					 ps2.setLong(1,id_cmd);
				 	 ResultSet rs2=ps2.executeQuery();
				 		while(rs2.next()) {
				 	     Panier p = new Panier();
				 		 int id_medication=rs2.getInt("id_medication");
				 		 PreparedStatement ps3= connection.prepareStatement("SELECT * FROM medication WHERE id_medication = ?");
						 ps3.setInt(1,id_medication);
					 	 ResultSet rs3=ps3.executeQuery();
					 	 while(rs3.next()) {
                        Medication Med = new Medication();
                        Med.setId_medication(id_medication);
                        Med.setPrice(rs3.getInt("price"));
                        Med.setName(rs3.getString("name"));
                        Med.setCategorie(rs3.getString("categorie"));
                        Med.setDescription(rs3.getString("description"));
                        Med.setImage(rs3.getString("image"));
                         p.setMedication(Med);
				 	     }
					 	 p.setQte(rs2.getInt("qte"));
					 	 panniers.add(p);
		 		         }
				 		cmd.setPaniers(panniers);
				}
		 		} catch (SQLException e) {
				e.printStackTrace();}
		return cmd;
	}

	@Override
	public double totalcmd(commande cmd) {
		double total = 0;
		List<Panier> paniers = cmd.getPaniers();
		 for (Panier p1 : paniers) {
		  total = total + p1.getQte()*p1.getMedication().getPrice();
		 }
		return total;
	}

	@Override
	public void TreatedOrder(long id_cmd) {
		 Connection connection=SingletonConnection.getConnection();
	        try {
				 PreparedStatement ps=connection.prepareStatement
				("UPDATE commande SET status=? WHERE id_cmd = ?");
				 ps.setBoolean(1,true);
				 ps.setLong(2,id_cmd);

	             ps.executeUpdate();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}		
	}

	@Override
	public List<Medication> SearchMedication(String motcle) {
		 Connection connection=SingletonConnection.getConnection();
		 List<Medication> medications = new ArrayList<>();
		 try {
	         PreparedStatement ps= connection.prepareStatement("SELECT * FROM medication WHERE name LIKE ?");
			 ps.setString(1,motcle);
	 		 ResultSet rs=ps.executeQuery();
	 		while(rs.next()) {
				Medication Med=new Medication();
				Med.setId_medication(rs.getInt("Id_medication"));
				Med.setName(rs.getString("name"));
			    Med.setPrice(rs.getDouble("price"));
			    Med.setCategorie(rs.getString("categorie"));
			    Med.setDescription(rs.getString("description"));
			    Med.setImage(rs.getString("image"));
				medications.add(Med);
			}

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 return medications;
	}

	@Override
	public List<Medication> MedicationByCategorie(String Cat) {
		 Connection connection=SingletonConnection.getConnection();
		 List<Medication> medications = new ArrayList<>();
		 try {
	         PreparedStatement ps= connection.prepareStatement("SELECT * FROM medication WHERE categorie = ?");
			 ps.setString(1,Cat);
	 		 ResultSet rs=ps.executeQuery();
	 		while(rs.next()) {
				Medication Med=new Medication();
				Med.setId_medication(rs.getInt("Id_medication"));
				Med.setName(rs.getString("name"));
			    Med.setPrice(rs.getDouble("price"));
			    Med.setCategorie(rs.getString("categorie"));
			    Med.setDescription(rs.getString("description"));
			    Med.setImage(rs.getString("image"));
				medications.add(Med);
			}

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 return medications;
	}
	}
