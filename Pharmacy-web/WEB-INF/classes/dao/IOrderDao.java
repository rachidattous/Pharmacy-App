package dao;

import java.util.List;

import metier.Client;
import metier.Panier;

public interface IOrderDao {
    public void addOrder(Client cl,long IdPh,List<Panier> paniers);
}
