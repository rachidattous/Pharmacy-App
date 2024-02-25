package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import metier.Blog;
import metier.Message;
import metier.Pharmacy;

public class PharmacyDaoImpl implements IPharmacyDao {

	@Override
	public void AddPharmacy(Pharmacy Ph) {
        Connection connection=SingletonConnection.getConnection();
        int id = 0;
        try {
			 PreparedStatement ps=connection.prepareStatement
					("INSERT INTO pharmacies(name,picture,responsible,phone,email,password,address,lat,lng,onDuty) VALUES(?,?,?,?,?,?,?,?,?,?)"); 
			 ps.setString(1, Ph.getName());
			 ps.setString(2, Ph.getPicture());
			 ps.setString(3, Ph.getResponsible());
			 ps.setString(4, Ph.getPhone());
			 ps.setString(5, Ph.getEmail());
			 ps.setString(6, Ph.getPassword());
			 ps.setString(7, Ph.getAddress());
             ps.setDouble(8, Ph.getLat());
             ps.setDouble(9, Ph.getLng());
             ps.setBoolean(10, false);
             ps.executeUpdate();
             PreparedStatement ps1=connection.prepareStatement
						("SELECT MAX(pharmacyID) as pharmacyID  FROM pharmacies");
             ResultSet rs=ps1.executeQuery();
     		 if(rs.next()){
     		   id=rs.getInt("pharmacyID");
     		 }
             
			 PreparedStatement ps2=connection.prepareStatement
						("INSERT INTO accounts(id,responsible,email,password) VALUES(?,?,?,?)");
			 ps2.setInt(1, id);
			 ps2.setString(2, Ph.getResponsible());
			 ps2.setString(3, Ph.getEmail());
			 ps2.setString(4, Ph.getPassword());
             ps2.executeUpdate();
        } catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	@Override
	public List<Pharmacy> getAllPharmacy() {
       List<Pharmacy> AllPharmacy=new ArrayList<Pharmacy>();
       Connection connection=SingletonConnection.getConnection();
       try {
		PreparedStatement ps=connection.prepareStatement("SELECT * FROM pharmacies");
		ResultSet rs=ps.executeQuery();
		while(rs.next()) {
			Pharmacy Ph=new Pharmacy();
			Ph.setPharmacyID(rs.getInt("pharmacyID"));
			Ph.setName(rs.getString("name"));
			Ph.setEmail(rs.getString("email"));
			Ph.setPassword(rs.getString("password"));
			Ph.setAddress(rs.getString("address"));
			Ph.setPicture(rs.getString("picture"));
			Ph.setResponsible(rs.getString("responsible"));
			Ph.setPhone(rs.getString("phone"));
			Ph.setLat(rs.getDouble("lat"));
			Ph.setLng(rs.getDouble("lng"));
			Ph.setOnDuty(rs.getBoolean("onDuty"));
			AllPharmacy.add(Ph);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
		return AllPharmacy;
	}

	@Override
	public void DeletePharmacy(long id) {
        Connection connection=SingletonConnection.getConnection();
		try {
			PreparedStatement ps=connection.prepareStatement("DELETE FROM pharmacies WHERE pharmacyID=?");
			ps.setLong(1, id);
            ps.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

		
	}
	@Override
	public void UpdatePharmacy(Pharmacy Ph,long id) {
	      Connection connection=SingletonConnection.getConnection();
	        try {
				 PreparedStatement ps=connection.prepareStatement
				("UPDATE pharmacies SET name=?,picture=?,responsible=?,phone=?,email=?,password=?,address=?,lat=?,lng=?,onDuty=? WHERE pharmacyID=?");
				 ps.setString(1, Ph.getName());
				 ps.setString(2, Ph.getPicture());
				 ps.setString(3, Ph.getResponsible());
				 ps.setString(4, Ph.getPhone());
				 ps.setString(5, Ph.getEmail());
				 ps.setString(6, Ph.getPassword());
				 ps.setString(7, Ph.getAddress());
	             ps.setDouble(8, Ph.getLat());
	             ps.setDouble(9, Ph.getLng());
	             ps.setBoolean(10, false);
	             ps.setLong(11,id);
	             ps.executeUpdate();
	             
	             PreparedStatement ps2=connection.prepareStatement
							("UPDATE accounts SET responsible=?,email=?,password=? WHERE id=?");
				 ps2.setString(1, Ph.getResponsible());
				 ps2.setString(2, Ph.getEmail());
				 ps2.setString(3, Ph.getPassword());
				 ps2.setLong(4, id);
	             ps2.executeUpdate();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
            		
	}
	@Override
	public void DetailsPharmacy(int id) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public Pharmacy getPharmacy(long id) {
	       Connection connection=SingletonConnection.getConnection();
			Pharmacy Ph=new Pharmacy();
	       try {
			PreparedStatement ps=connection.prepareStatement("SELECT * FROM pharmacies WHERE pharmacyID=?");
			ps.setLong(1, id);
			ResultSet rs=ps.executeQuery();
			while(rs.next()) {
				Ph.setPharmacyID(rs.getInt("pharmacyID"));
				Ph.setName(rs.getString("name"));
				Ph.setEmail(rs.getString("email"));
				Ph.setPassword(rs.getString("password"));
				Ph.setAddress(rs.getString("address"));
				Ph.setResponsible(rs.getString("responsible"));
				Ph.setPicture(rs.getString("picture"));
				Ph.setPhone(rs.getString("phone"));
				Ph.setLat(rs.getDouble("lat"));
				Ph.setLng(rs.getDouble("lng"));
				Ph.setOnDuty(rs.getBoolean("onDuty"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			return Ph;		
	}
	@Override
	public void DutyPharmacyTrue(String[] ids) {
	      Connection connection=SingletonConnection.getConnection();
		try {
		   PreparedStatement ps1 = connection.prepareStatement
						("UPDATE pharmacies SET onDuty=?");
            ps1.setBoolean(1,false);
            ps1.executeUpdate();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
      	for(String id:ids) {
	        try {
	            int ID=Integer.parseInt(id);
				 PreparedStatement ps=connection.prepareStatement
				("UPDATE pharmacies SET onDuty=? WHERE pharmacyID=?");
                 ps.setBoolean(1,true);
                 ps.setInt(2, ID);
	             ps.executeUpdate();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}		
	}}
	@Override
	public void DutyPharmacyFalse() {
		   Connection connection=SingletonConnection.getConnection();
		        try {
					 PreparedStatement ps=connection.prepareStatement
					("UPDATE pharmacies SET onDuty=?");
	                 ps.setBoolean(1,false);
		             ps.executeUpdate();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}		
	}
	public void AddBlog(String blog, String picture,String title) {
		 Connection connection=SingletonConnection.getConnection();
	        try {
				PreparedStatement ps=connection.prepareStatement
						("INSERT INTO blog(blog,picture,title) VALUES(?,?,?)");
				 ps.setString(1,blog);
				 ps.setString(2,picture);
				 ps.setString(3,title);
		         ps.executeUpdate();
			} catch (SQLException e) {
				e.printStackTrace();
			}		
	}

	@Override
	public List<Blog> GetAllBlog() {
		 Connection connection=SingletonConnection.getConnection();
        List<Blog> blogs = new ArrayList<Blog>(); 
		try {
	         PreparedStatement ps= connection.prepareStatement("SELECT * FROM blog");
	 		 ResultSet rs=ps.executeQuery();
	 		while(rs.next()) {
				Blog bg=new Blog();
				bg.setBlog(rs.getString("blog"));
				bg.setPicture(rs.getString("picture"));
				bg.setTitle(rs.getString("title"));
				bg.setId_blog(rs.getInt("id_blog"));
		 		blogs.add(bg);
			}

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

        
		return blogs;
	}

	@Override
	public Blog GetBlog(int Id) {
		Blog bg = new Blog();
		  Connection connection=SingletonConnection.getConnection();
			try {
		         PreparedStatement ps= connection.prepareStatement("SELECT * FROM blog WHERE id_blog=?");
				 ps.setInt(1,Id);
		 		 ResultSet rs=ps.executeQuery();
		 		while(rs.next()) {
		 			bg.setBlog(rs.getString("blog"));
					bg.setPicture(rs.getString("picture"));
					bg.setTitle(rs.getString("title"));
					bg.setId_blog(rs.getInt("id_blog"));
				}

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return bg;
	}

	@Override
	public void UpdateBlog(Blog bg, int Id) {
		 Connection connection=SingletonConnection.getConnection();
	        try {
				 PreparedStatement ps=connection.prepareStatement
				("UPDATE blog SET blog=?,picture=?,title=? WHERE id_blog=?");
				 ps.setString(1,bg.getBlog());
				 ps.setString(2,bg.getPicture());
				 ps.setString(3,bg.getTitle());
	             ps.setInt(4,Id);
	             ps.executeUpdate();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	 }

	@Override
	public void DeleteBlog(int Id) {
		 Connection connection=SingletonConnection.getConnection();
			try {
				PreparedStatement ps=connection.prepareStatement("DELETE FROM blog WHERE id_blog=?");
				ps.setLong(1, Id);
	            ps.executeUpdate();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}		
	}

	@Override
	public void DetailsBlog(int Id) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public List<Pharmacy> SearchPharmacy(String motcle) {
		 Connection connection=SingletonConnection.getConnection();
		 List<Pharmacy> allpharmacy = new ArrayList<>();
		 try {
	         PreparedStatement ps= connection.prepareStatement("SELECT * FROM pharmacies WHERE name LIKE ?");
			 ps.setString(1,motcle);
	 		 ResultSet rs=ps.executeQuery();
	 		while(rs.next()) {
	 			Pharmacy Ph=new Pharmacy();
	 			Ph.setPharmacyID(rs.getInt("pharmacyID"));
				Ph.setName(rs.getString("name"));
				Ph.setEmail(rs.getString("email"));
				Ph.setPassword(rs.getString("password"));
				Ph.setAddress(rs.getString("address"));
				Ph.setResponsible(rs.getString("responsible"));
				Ph.setPicture(rs.getString("picture"));
				Ph.setPhone(rs.getString("phone"));
				Ph.setLat(rs.getDouble("lat"));
				Ph.setLng(rs.getDouble("lng"));
				Ph.setOnDuty(rs.getBoolean("onDuty"));
				allpharmacy.add(Ph);
			}

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 return allpharmacy;
	}
	@Override
	public void SendMessage(Message msg) {
		 Connection connection=SingletonConnection.getConnection();
	        try {
				PreparedStatement ps=connection.prepareStatement
						("INSERT INTO messages(name,email,message) VALUES(?,?,?)");
				 ps.setString(1,msg.getName());
				 ps.setString(2,msg.getEmail());
				 ps.setString(3,msg.getMessage());
		         ps.executeUpdate();
			} catch (SQLException e) {
				e.printStackTrace();
			}			
	}
	@Override
	public List<Message> AllMessages() {
		Connection connection=SingletonConnection.getConnection();
        List<Message> messages = new ArrayList<Message>(); 
		try {
	         PreparedStatement ps= connection.prepareStatement("SELECT * FROM messages");
	 		 ResultSet rs=ps.executeQuery();
	 		while(rs.next()) {
				Message Msg=new Message();
				Msg.setId(rs.getInt("id"));
                Msg.setName(rs.getString("name"));
                Msg.setEmail(rs.getString("email"));
                Msg.setMessage(rs.getString("message"));
                messages.add(Msg);	 		}

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return messages;
	}
	@Override
	public Message GetMessage(int id) {
		Message Msg = new Message();
		  Connection connection=SingletonConnection.getConnection();
			try {
		         PreparedStatement ps= connection.prepareStatement("SELECT * FROM messages WHERE id=?");
				 ps.setInt(1,id);
		 		 ResultSet rs=ps.executeQuery();
		 		while(rs.next()) {
		 			Msg.setId(rs.getInt("id"));
	                Msg.setName(rs.getString("name"));
	                Msg.setEmail(rs.getString("email"));
	                Msg.setMessage(rs.getString("message"));
				}

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return Msg;
	}
	@Override
	public void DeleteMessage(int id) {
		 Connection connection=SingletonConnection.getConnection();
			try {
				PreparedStatement ps=connection.prepareStatement("DELETE FROM messages WHERE id=?");
				ps.setLong(1, id);
	            ps.executeUpdate();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}		
	}
}
