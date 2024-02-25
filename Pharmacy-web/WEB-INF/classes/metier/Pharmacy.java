package metier;

import java.io.Serializable;

public class Pharmacy implements Serializable{
 
     	private static final long serialVersionUID = 1L;
		private long PharmacyID;
        private String name;
        private String picture;
		private String responsible;
        private String phone;
        private String email;
        private String password;
 		private String address;
        private double lat;
        private double lng;
        private boolean onDuty;
		public Pharmacy(String name,String picture,String responsible, String phone,String email,String password, String address, double lat, double lng) {
			super();
			this.name = name;
			this.picture=picture;
			this.responsible=responsible;
			this.phone = phone;
			this.email=email;
			this.address = address;
			this.lat = lat;
			this.lng = lng;
			this.password=password;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public Pharmacy() {
			super();
		}
	       public String getEmail() {
				return email;
			}
			public void setEmail(String email) {
				this.email = email;
			}
        public String getPicture() {
			return picture;
		}
		public void setPicture(String picture) {
			this.picture = picture;
		}
		public long getPharmacyID() {
			return PharmacyID;
		}
		public void setPharmacyID(long pharmacyID2) {
			PharmacyID = pharmacyID2;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getPhone() {
			return phone;
		}
		public void setPhone(String phone) {
			this.phone = phone;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}
		public double getLat() {
			return lat;
		}
		public void setLat(double lat) {
			this.lat = lat;
		}
		public double getLng() {
			return lng;
		}
		public void setLng(double lng) {
			this.lng = lng;
		}
		public boolean isOnDuty() {
			return onDuty;
		}
		public void setOnDuty(boolean onDuty) {
			this.onDuty = onDuty;
		}
		public String getResponsible() {
			return responsible;
		}
		public void setResponsible(String responsible) {
			this.responsible = responsible;
		}
        
        
}
