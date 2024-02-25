package controleur;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.IMedicationDao;
import dao.IMedicationDaoImpl;
import dao.IOrderDao;
import dao.IPharmacyDao;
import dao.OrderDaoImpl;
import dao.PharmacyDaoImpl;
import metier.Blog;
import metier.Client;
import metier.Medication;
import metier.Message;
import metier.Panier;
import metier.Pharmacy;
import web.PharmacyModel;

@WebServlet("*.ph")
public class WebSiteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private IPharmacyDao metier;
    private IMedicationDao metierMedication;
    private IOrderDao metierOrder;
	 List<Panier> paniers = new ArrayList<>();
	int nbrItems;
	double total;
    public void init() throws ServletException{
        metier = new PharmacyDaoImpl();
        metierMedication = new IMedicationDaoImpl();
        metierOrder = new OrderDaoImpl();
    }
    public WebSiteServlet() {
        super();
    }

	@SuppressWarnings("unchecked")
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String path=request.getServletPath();
        HttpSession session = request.getSession();
		if(path.equals("/Home.ph")){
		    PharmacyModel model = new PharmacyModel();
		    List<Pharmacy> AllPharmacy=metier.getAllPharmacy();
		    model.setAllPharmacy(AllPharmacy);
		    request.setAttribute("model", model);
		    request.getRequestDispatcher("/Website/index.jsp").forward(request, response);
	     }
		 else if(path.equals("/DetailPharmacy.ph")){
			 long id=Long.parseLong(request.getParameter("IdPh"));
			 session.setAttribute("IdPh",id);
			 Pharmacy Ph = new Pharmacy();
		   	 Ph=metier.getPharmacy(id);
		   	 List<Medication> AllMedications = new ArrayList<>();
		   	 AllMedications=metierMedication.GetAllMedications(id);
		   	 request.setAttribute("Med",AllMedications);		   	 
		   	 request.setAttribute("Ph", Ph);
		     request.getRequestDispatcher("/Website/PharmacyDetails.jsp").forward(request, response);
		  }
		 else if(path.equals("/DetailMedication.ph")){
			 long id=Long.parseLong(request.getParameter("IdMed"));
			 Medication Med = new Medication();
			 Med=metierMedication.GetMedication(id);
		   	 request.setAttribute("Med",Med);		   	 
		     request.getRequestDispatcher("/Website/DetailsMedication.jsp").forward(request, response);
		 }
		 else if(path.equals("/AjouterPanier.ph")){
			/* if (session.getAttribute("paniers") != null) {
	                paniers = (List<Panier>) session.getAttribute("paniers");
			 }*/
			 long id=Long.parseLong(request.getParameter("IdMed"));
			 int Qte=1;
			 if(request.getParameter("Qte")!=null){
				 Qte=Integer.parseInt(request.getParameter("Qte"));
			  }
			 Panier p =new Panier();
			 Medication Med = new Medication();
			 Med=metierMedication.GetMedication(id);
			 p.setMedication(Med);
             p.setQte(Qte);
             if (p != null) {
            	 int etat = 0;
                 if (session.getAttribute("paniers") != null) {
                     paniers = (List<Panier>) session.getAttribute("paniers");
                     for (Panier p1 : paniers) {
                         if (p1.getMedication().getId_medication() == id) {
                             p1.setQte(p1.getQte() + 1);
                             etat = 1;
                         }
                     }
                 }
                 if (etat == 0) {
                     paniers.add(p);
                     session.setAttribute("paniers", paniers);
                 }
             }
             String Url="DetailPharmacy.ph?IdPh="+session.getAttribute("IdPh");
			 response.sendRedirect(Url);
		 }
		 else if(path.equals("/cart.ph")){
		     request.getRequestDispatcher("/Website/cart.jsp").forward(request, response);
		 }
  		 else if(path.equals("/CartDelete.ph")){
			 long id=Long.parseLong(request.getParameter("IdM"));
		       paniers = (List<Panier>) session.getAttribute("paniers");
		       List<Panier> NewPanier = new ArrayList<>();
               for (Panier p1 : paniers) {
                   if (p1.getMedication().getId_medication() != id) {
                	   NewPanier.add(p1);
                   }
               }
               paniers=NewPanier;
               session.setAttribute("paniers", paniers);
  			   response.sendRedirect("cart.ph");
  		 }
 		 else if(path.equals("/Order.ph")){
 		          String nom=request.getParameter("nom");
 		          String prenom=request.getParameter("prenom");
 		          String address=request.getParameter("address");
 		  	      String email=request.getParameter("email");
 		          String Tel=request.getParameter("tel");
 		          Client cl=new Client();
 		          cl.setNom(nom);
 		          cl.setPrenom(prenom);
 		          cl.setAddress(address);
 		          cl.setEmail(email);
 		          cl.setTel(Tel);
 				  long id=(long) session.getAttribute("IdPh");
 			      paniers = (List<Panier>) session.getAttribute("paniers");
 		          metierOrder.addOrder(cl,id, paniers);
 			      List<Panier> NewPanier = new ArrayList<>();
 	              paniers=NewPanier;
 	              session.setAttribute("paniers", paniers);
			      response.sendRedirect("Home.ph");
		 }
  		 else if(path.equals("/contact.ph")){
		     request.getRequestDispatcher("/Website/contact.jsp").forward(request, response);
  		 }
  		 else if(path.equals("/checkout.ph")){
		     request.getRequestDispatcher("/Website/checkout.jsp").forward(request, response);
  		 }
  		 else if(path.equals("/blog.ph")){
  			 List<Blog> blogs = metier.GetAllBlog();
  			 request.setAttribute("blogs", blogs);
		     request.getRequestDispatcher("/Website/blog.jsp").forward(request, response);
  		 }
  		 else if(path.equals("/blogdetail.ph")){
			 int id=Integer.parseInt(request.getParameter("idbg"));
  			 Blog blog = metier.GetBlog(id);
  			 request.setAttribute("bg", blog);
		     request.getRequestDispatcher("/Website/blog-details.jsp").forward(request, response);
  		 }
 		 else if(path.equals("/searchmedication.ph")){
			 String motcle=request.getParameter("motcle");
			 List<Medication> medications= metierMedication.SearchMedication("%"+motcle+"%");
			 if(medications.isEmpty()) {
				 String Message = "No result";
				 request.setAttribute("Message",Message);}
			 request.setAttribute("medications", medications);
		     request.getRequestDispatcher("/Website/MedicationsSearch.jsp").forward(request, response);
 		 }
 		else if(path.equals("/searchpharmacy.ph")){
			 String motcle=request.getParameter("motcle");
			 List<Pharmacy> allpharmacy= metier.SearchPharmacy("%"+motcle+"%");
			 request.setAttribute("allpharmacy", allpharmacy);
		     request.getRequestDispatcher("/Website/PharmacySearch.jsp").forward(request, response);
		 }
 		else if(path.equals("/SendMessage.ph")){
			 String name=request.getParameter("name");
			 String email=request.getParameter("email");
			 String message=request.getParameter("message");
			 Message msg = new Message(name,email,message);
			 metier.SendMessage(msg);
             String SendSuccess = "your message has been sent successfully! ";
             request.setAttribute("msg", SendSuccess);
		     request.getRequestDispatcher("/Website/contact.jsp").forward(request, response);
		 }
 		 else if(path.equals("/Medbycat.ph")){
			 String cat=request.getParameter("cat");
			 List<Medication> medications= metierMedication.MedicationByCategorie(cat);
			 request.setAttribute("medications", medications);
			 if(medications.isEmpty()) {
			 String Message = "No result";
			 request.setAttribute("Message",Message);}
		     request.getRequestDispatcher("/Website/MedicationByCategories.jsp").forward(request, response);
 		 }
  		else if(path.equals("/AllPharmacy.ph")){
			 List<Pharmacy> allpharmacy= metier.getAllPharmacy();
			 request.setAttribute("allpharmacy", allpharmacy);
		     request.getRequestDispatcher("/Website/PharmacySearch.jsp").forward(request, response);
		 }
		if(session.getAttribute("paniers")!=null){
		       paniers = (List<Panier>) session.getAttribute("paniers");
                nbrItems=paniers.size();
               session.setAttribute("nbrItems", nbrItems);
               total=0;
               for (Panier p1 : paniers) {
                       total=total+p1.getMedication().getPrice()*p1.getQte();
                   }
               session.setAttribute("total", total);
               }
		else {
              total=0;
			  nbrItems=0;
              session.setAttribute("nbrItems", nbrItems); 
              session.setAttribute("total", total);
	     }	

	    }
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
