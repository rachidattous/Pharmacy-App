package dao;

import java.util.List;

import metier.Blog;
import metier.Message;
import metier.Pharmacy;

public interface IPharmacyDao {
      public void AddPharmacy(Pharmacy Ph);
      public List<Pharmacy> getAllPharmacy();
      public Pharmacy getPharmacy(long id);
      public void UpdatePharmacy(Pharmacy Ph,long id);
      public void DeletePharmacy(long id);
      public void DetailsPharmacy(int id);
      public void DutyPharmacyTrue(String[] ids);
      public void DutyPharmacyFalse();
      public void AddBlog(String blog,String picture,String title);
      public List<Blog> GetAllBlog();
      public Blog GetBlog(int Id);
      public void UpdateBlog(Blog bg,int Id);
      public void DeleteBlog(int Id);
      public void DetailsBlog(int Id);
      public List<Pharmacy> SearchPharmacy(String motcle);
      public void SendMessage(Message msg);
      public List<Message> AllMessages();
      public Message GetMessage(int id);
      public void DeleteMessage(int id);


}
