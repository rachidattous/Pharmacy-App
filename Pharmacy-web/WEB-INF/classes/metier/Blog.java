package metier;

public class Blog {
     private int id_blog;
     private String title;
     private String blog;
     private String picture;
	public Blog() {
		super();
	}
	public Blog(int id_blog, String title, String blog, String picture) {
		super();
		this.id_blog = id_blog;
		this.title = title;
		this.blog = blog;
		this.picture = picture;
	}
	public int getId_blog() {
		return id_blog;
	}
	public void setId_blog(int id_blog) {
		this.id_blog = id_blog;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getBlog() {
		return blog;
	}
	public void setBlog(String blog) {
		this.blog = blog;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
     
}
