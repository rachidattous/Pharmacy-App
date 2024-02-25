package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import metier.Account;

public class AccountDaoImpl implements IAccountDao {
    public Account CheckAccount(String email, String password) {
        Connection connection=SingletonConnection.getConnection();
   	    Account acc=new Account();
		try {
			PreparedStatement ps=connection.prepareStatement("SELECT * FROM accounts");
			ResultSet rs=ps.executeQuery();
			while(rs.next()) {
             if(email.equals(rs.getString("email")) && password.equals(rs.getString("password"))) {
            	 acc.setId(rs.getLong("id"));
            	 acc.setResponsible(rs.getString("responsible"));
            	 acc.setEmail(rs.getString("email"));
            	 acc.setPassword(rs.getString("password"));
            	 return acc;
            	 }
             }}
		 catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		   }
		return null;
}
}