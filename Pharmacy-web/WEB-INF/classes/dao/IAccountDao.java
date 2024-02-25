package dao;

import metier.Account;

public interface IAccountDao {
      public Account CheckAccount(String email, String password);
}
