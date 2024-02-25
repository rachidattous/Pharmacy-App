package controleur;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSession;

import dao.IMedicationDao;
import dao.IMedicationDaoImpl;
import metier.Account;
import metier.Medication;
import metier.commande;
import web.MedicationModel;

@WebServlet("*.co")
public class MedicationServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private IMedicationDao metier;
    public void init() throws ServletException{
        metier = new IMedicationDaoImpl();
    }
    public MedicationServlet() {
        super();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String path=request.getServletPath();
        HttpSession session = request.getSession();
         Account acc=(Account) session.getAttribute("acc");
         long PharmaId=acc.getId();
        if(path.equals("/dashboard.co")) {
		    request.getRequestDispatcher("Dashboard.jsp").forward(request, response);
        }
        else if(path.equals("/AllMedications.co")){
		    MedicationModel model = new MedicationModel();
		    List<Medication> AllMedication=metier.GetAllMedications(PharmaId);
		    model.setAllMedication(AllMedication);
		    request.setAttribute("model", model);
			request.getRequestDispatcher("AllMedications.jsp").forward(request, response);	
	    }
        else if(path.equals("/AddMedications.co")) {
        	String name = request.getParameter("name");
        	double price = Double.parseDouble(request.getParameter("price"));
        	String description = request.getParameter("description");
        	String categorie = request.getParameter("categorie");
        	String picture= request.getParameter("picture");
        	Medication Med = new Medication(name,description,price,categorie,picture);
        	metier.AddMedication(Med,PharmaId);
        	String Message="The new Medication saved";
            request.setAttribute("Message",Message);
  			request.getRequestDispatcher("AddMedication.jsp").forward(request, response);	
        }
        else if(path.equals("/Details.co")){
			 long id=Long.parseLong(request.getParameter("id"));
			 Medication Med = new Medication();
		   	 Med=metier.GetMedication(id);
		   	 request.setAttribute("Med", Med);
		     request.getRequestDispatcher("/DetailsMedication.jsp").forward(request, response);
		  }
        else if(path.equals("/Modify.co")){
			 long id=Long.parseLong(request.getParameter("id"));
			 Medication Med = new Medication();
		   	 Med=metier.GetMedication(id);
		   	 request.setAttribute("Med", Med);
		     request.getRequestDispatcher("/ModifyMedication.jsp").forward(request, response);
		  }
        else if(path.equals("/Delete.co")){
			 long id=Long.parseLong(request.getParameter("id"));
			 metier.DeleteMedication(id);	
		     String MessageSupression="The Medication Deleted";
	         request.setAttribute("Message",MessageSupression);
		     //request.getRequestDispatcher("/AllPharmacies.jsp").forward(request, response);
	         response.sendRedirect("AllMedications.co");}
        else if(path.equals("/UpdateMedication.co")) {
		long id=Long.parseLong(request.getParameter("id_med"));
		String name=request.getParameter("name");
		String description=request.getParameter("description");
		String categorie=request.getParameter("categorie");
		String picture=request.getParameter("picture");
		double price=Double.parseDouble(request.getParameter("price"));
		Medication Med=new Medication(name,description,price,categorie,picture);
		metier.UpdateMedication(Med,id);
        String Message="The Medication Modified";
        request.setAttribute("Message",Message);
        response.sendRedirect("AllMedications.co");}
        else if(path.equals("/AllOrders.co")){
         List<commande> commandes=metier.GetCommande(PharmaId);
         session.setAttribute("commandes", commandes);
         request.setAttribute("commandes", commandes);
	     request.getRequestDispatcher("/AllOrders.jsp").forward(request, response);
        }
        else if(path.equals("/DetailOrder.co")){
    		long id_cmd=Long.parseLong(request.getParameter("idcmd"));
            commande cmd = new commande();
            cmd=metier.DetailCommande(id_cmd);
            request.setAttribute("cmd",cmd);
    		double total = metier.totalcmd(cmd);
            request.setAttribute("total",total);
   	        request.getRequestDispatcher("/DetailOrder.jsp").forward(request, response);
        }
        else if(path.equals("/treated.co")){
    		long id_cmd=Long.parseLong(request.getParameter("idcmd"));
    		metier.TreatedOrder(id_cmd);
	         response.sendRedirect("AllOrders.co");
        }

        }
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
