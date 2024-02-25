package metier;

public class Account {
       private long id;
       private String responsible;
       private String email;
       private String password;
	public Account() {
		super();
	}
	public Account(String responsible, String email, String password) {
		super();
		this.responsible = responsible;
		this.email = email;
		this.password = password;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getResponsible() {
		return responsible;
	}
	public void setResponsible(String responsible) {
		this.responsible = responsible;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	} 
       
}
