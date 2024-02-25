package metier;
public class Medication {
	private int id_medication;
	private String name;
	private String description;
	private double price;
	private String categorie;
	private String image;
	public Medication() {
		super();
	}
	public Medication(String name, String description, double price, String categorie,String image) {
		super();
		this.name = name;
		this.description = description;
		this.price = price;
		this.categorie = categorie;
		this.setImage(image);
	}
	public int getId_medication() {
		return id_medication;
	}
	public void setId_medication(int id_medication) {
		this.id_medication = id_medication;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getCategorie() {
		return categorie;
	}
	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}


	
	
}
