package controleur;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.AccountDaoImpl;
import dao.IAccountDao;
import dao.IPharmacyDao;
import dao.PharmacyDaoImpl;
import metier.Account;
import metier.Blog;
import metier.Message;
import metier.Pharmacy;
import web.PharmacyModel;

@WebServlet("*.do")
public class PharmacyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private IPharmacyDao metier;
    private IAccountDao metierAccount;
    public void init() throws ServletException{
         metier = new PharmacyDaoImpl();
         metierAccount= new AccountDaoImpl();
    }
    public PharmacyServlet() {
        super();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String path=request.getServletPath();
        HttpSession session = request.getSession();

        //HttpSession session = request.getSession();
		if(path.equals("/index.do")) {
		    PharmacyModel model = new PharmacyModel();
		    List<Pharmacy> AllPharmacy=metier.getAllPharmacy();
		    model.setAllPharmacy(AllPharmacy);
		    request.setAttribute("model", model);
		    request.getRequestDispatcher("index.jsp").forward(request, response);
	    }
		else if(path.equals("/AllPharmacies.do")) {
		    PharmacyModel model = new PharmacyModel();
		    List<Pharmacy> AllPharmacy=metier.getAllPharmacy();
		    model.setAllPharmacy(AllPharmacy);
		    request.setAttribute("model", model);
			request.getRequestDispatcher("AllPharmacies.jsp").forward(request, response);	
		}
		else if(path.equals("/DutyCalendar.do")) {
		    PharmacyModel model = new PharmacyModel();
		    List<Pharmacy> AllPharmacy=metier.getAllPharmacy();
		    model.setAllPharmacy(AllPharmacy);
		    request.setAttribute("model", model);
			request.getRequestDispatcher("DutyCalendar.jsp").forward(request, response);	
		}
		else if(path.equals("/AddPharmacy.do")) {
			request.getRequestDispatcher("AddPharmacy.jsp").forward(request, response);	
		}
		 else if(path.equals("/Delete.do")){
			 long id=Long.parseLong(request.getParameter("id"));
			 metier.DeletePharmacy(id);	
		     String MessageSupression="The pharmacy Deleted";
	         request.setAttribute("Message",MessageSupression);
		     //request.getRequestDispatcher("/AllPharmacies.jsp").forward(request, response);
	         response.sendRedirect("AllPharmacies.do");}
	         else if(path.equals("/Modify.do")){
				 long id=Long.parseLong(request.getParameter("id"));
				 Pharmacy Ph = new Pharmacy();
			   	 Ph=metier.getPharmacy(id);
			   	 request.setAttribute("Ph", Ph);
			     request.getRequestDispatcher("/ModifyPharmacy.jsp").forward(request, response);
			  }
	         else if(path.equals("/Details.do")){
				 long id=Long.parseLong(request.getParameter("id"));
				 Pharmacy Ph = new Pharmacy();
			   	 Ph=metier.getPharmacy(id);
			   	 request.setAttribute("Ph", Ph);
			     request.getRequestDispatcher("/DetailsPharmacy.jsp").forward(request, response);
			  }
	        else if(path.equals("/SavePharmacy.do")) {
			String name=request.getParameter("name");
			String responsible=request.getParameter("responsible");
			String phone=request.getParameter("phone");
			String address=request.getParameter("address");
			double lat=Double.parseDouble(request.getParameter("lat"));
			double lng=Double.parseDouble(request.getParameter("lng"));
			String picture=request.getParameter("picture");
			String email=request.getParameter("email");
			String password=request.getParameter("password");
			Pharmacy Ph=new Pharmacy(name,picture,responsible,phone,email,password,address,lat,lng);
           metier.AddPharmacy(Ph);
           String Message="The new pharmacy saved";
           request.setAttribute("Message",Message);
			request.getRequestDispatcher("AddPharmacy.jsp").forward(request, response);	
		   }
	        else if(path.equals("/UpdatePharmacy.do")) {
			long pharmacyID=Long.parseLong(request.getParameter("pharmacyID"));
			String name=request.getParameter("name");
			String responsible=request.getParameter("responsible");
			String phone=request.getParameter("phone");
			String address=request.getParameter("address");
			double lat=Double.parseDouble(request.getParameter("lat"));
			double lng=Double.parseDouble(request.getParameter("lng"));
			String picture=request.getParameter("picture");
			String email=request.getParameter("email");
			String password=request.getParameter("password");
			Pharmacy Ph=new Pharmacy(name,picture,responsible,phone,email,password,address,lat,lng);
			Ph.setPharmacyID(pharmacyID);
			metier.UpdatePharmacy(Ph,pharmacyID);
            String Message="The pharmacy Modified";
           request.setAttribute("Message",Message);
	        response.sendRedirect("AllPharmacies.do");}
	        else if(path.equals("/DutyPharma.do")) {
			     if(request.getParameterValues("status") != null) {
				  String[] ids=request.getParameterValues("status");
				  metier.DutyPharmacyTrue(ids);
				  response.sendRedirect("DutyCalendar.do");}
			     else {
			    	  metier.DutyPharmacyFalse();
					  response.sendRedirect("DutyCalendar.do");
			     }
		  }
	        else  if(path.equals("/CheckAccount.do")){
		     String email = request.getParameter("email");
		     String password = request.getParameter("password");
		     Account acc = new Account();
		     acc=metierAccount.CheckAccount(email, password);
	         if(acc!=null){
                session.setAttribute("acc", acc);
                 if(acc.getResponsible().equals("admin")) {
			     request.getRequestDispatcher("index.do").forward(request, response);}
                 else {
    			     request.getRequestDispatcher("dashboard.co").forward(request, response);} 
		          }
		     else {
			     String Message="email or password is wrong";
			     request.setAttribute("Message", Message);
			     request.getRequestDispatcher("/login.jsp").forward(request, response);
	      	  }
		      }
	        else  if(path.equals("/Logout.do")){
	            session.invalidate();
	            response.sendRedirect("login.jsp");
	         }
	        else if(path.equals("/AddBlog.do")){
	    		String title=request.getParameter("title");
	    		String blog=request.getParameter("blog");
	    		String picture = request.getParameter("picture");
	    		metier.AddBlog(blog,picture,title);
				response.sendRedirect("AllBlog.do");
	        } 
	        
	        else if(path.equals("/AllBlog.do")){
	        	List<Blog> blogs = metier.GetAllBlog();
	            request.setAttribute("blogs", blogs);
			    request.getRequestDispatcher("/AllBlogs.jsp").forward(request, response);
	        }
	        else if(path.equals("/Deletebg.do")){
				 int id=Integer.parseInt(request.getParameter("id"));
				 metier.DeleteBlog(id);
			     String MessageSupression="The pharmacy Deleted";
		         request.setAttribute("Message",MessageSupression);
			     //request.getRequestDispatcher("/AllPharmacies.jsp").forward(request, response);
		         response.sendRedirect("AllBlog.do");}
		         else if(path.equals("/Modifybg.do")){
					 int id=Integer.parseInt(request.getParameter("id"));
					 Blog bg = new Blog();
				   	 bg=metier.GetBlog(id);
				   	 request.setAttribute("bg", bg);
				     request.getRequestDispatcher("/ModifyBlog.jsp").forward(request, response);
				  }
		         else if(path.equals("/Detailsbg.do")){
					 int id=Integer.parseInt(request.getParameter("id"));
					 Blog bg = new Blog();
				   	 bg=metier.GetBlog(id);
				   	 request.setAttribute("bg", bg);
				     request.getRequestDispatcher("/DetailsBlog.jsp").forward(request, response);
				  }
			        else if(path.equals("/updatblog.do")) {
						int id=Integer.parseInt(request.getParameter("id"));
			        	String title=request.getParameter("title");
			    		String blog=request.getParameter("blog");
			    		String picture = request.getParameter("picture");
						Blog bg = new Blog();
						bg.setBlog(blog);
						bg.setId_blog(id);
						bg.setPicture(picture);
						bg.setTitle(title);
						metier.UpdateBlog(bg, id);
						response.sendRedirect("AllBlog.do");
			        }
			        else if(path.equals("/Message.do")){
			        	List<Message> messages = metier.AllMessages();
			            request.setAttribute("messages",messages);
					    request.getRequestDispatcher("/Messages.jsp").forward(request, response);
			        }
			        else if(path.equals("/DetailsMsg.do")){
						 int id=Integer.parseInt(request.getParameter("id"));
						 Message Msg = new Message();
					   	 Msg=metier.GetMessage(id);
					   	 request.setAttribute("msg", Msg);
					     request.getRequestDispatcher("DetailMessage.jsp").forward(request, response);
					  }
			        else if(path.equals("/DeleteMessage.do")){
						 int id=Integer.parseInt(request.getParameter("id"));
						 metier.DeleteMessage(id);
				         response.sendRedirect("Message.do");}
	         }
        	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            doGet(request,response);
		     }}
