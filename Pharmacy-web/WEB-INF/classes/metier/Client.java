package metier;

public class Client {
      private int id_client;
      private String nom;
      private String prenom;
      private String address;
  	  private String email;
      private String Tel;
      public Client() {
		super();
	}
	public Client(int id_client, String nom, String prenom, String address, String email, String tel) {
		super();
		this.id_client = id_client;
		this.nom = nom;
		this.prenom = prenom;
		this.address = address;
		this.email = email;
		Tel = tel;
	}
	public int getId_client() {
		return id_client;
	}
	public void setId_client(int id_client) {
		this.id_client = id_client;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTel() {
		return Tel;
	}
	public void setTel(String tel) {
		Tel = tel;
	}
}
