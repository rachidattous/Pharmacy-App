package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import metier.Client;
import metier.Panier;

public class OrderDaoImpl implements IOrderDao {

	@Override
	public void addOrder(Client cl, long IdPh, List<Panier> paniers) {
		Connection connection=SingletonConnection.getConnection();
		java.util.Date date=new java.util.Date();
		java.sql.Date sqlDate=new java.sql.Date(date.getTime());
		java.sql.Timestamp sqlTime=new java.sql.Timestamp(date.getTime());
		try {
			PreparedStatement ps=connection.prepareStatement
					("INSERT INTO client(nom,prenom,address,email,tel) VALUES(?,?,?,?,?)");
			 ps.setString(1,cl.getNom());
			 ps.setString(2,cl.getPrenom());
			 ps.setString(3,cl.getAddress());
			 ps.setString(4,cl.getEmail());
			 ps.setString(5,cl.getTel());
	         ps.executeUpdate();
	         PreparedStatement ps1= connection.prepareStatement("SELECT MAX(id_client) as id_client FROM client");
	 		 ResultSet rs=ps1.executeQuery();
	 		while(rs.next()){
	 			int Id_client=rs.getInt("id_client");
	 			PreparedStatement ps2=connection.prepareStatement
						("INSERT INTO commande(date,heure,status,id_client,pharmacyID) VALUES(?,?,?,?,?)");
		 		ps2.setDate(1,sqlDate);
		 		ps2.setTimestamp(2, sqlTime);
		 		ps2.setBoolean(3, false);
		 		ps2.setInt(4,Id_client);
		 		ps2.setLong(5,IdPh);
		        ps2.executeUpdate();
		        PreparedStatement ps3= connection.prepareStatement("SELECT MAX(id_cmd) as id_cmd FROM commande");
		 		 ResultSet rs1=ps3.executeQuery();
		 		while(rs1.next()){
		 			int Id_cmd=rs1.getInt("id_cmd");
		 			for (Panier p1 : paniers) {
		 				PreparedStatement ps4=connection.prepareStatement
								("INSERT INTO ligne_cmd(id_cmd,id_medication,qte) VALUES(?,?,?)");
				 		ps4.setInt(1, Id_cmd);;
				 		ps4.setInt(2,p1.getMedication().getId_medication());
				 		ps4.setInt(3,p1.getQte());
				        ps4.executeUpdate();
		 			}
	 		     }
	 		}
		   } catch (SQLException e) {
			e.printStackTrace();
		}
	    }

		
	}


