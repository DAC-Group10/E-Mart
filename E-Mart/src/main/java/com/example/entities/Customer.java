package com.example.entities;

import java.util.Set;

import jakarta.persistence.*;

@Entity
@Table(name = "Customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Cust_Id")
	private int cust_Id;
	
	@Column(name = "Cust_Name")
	private String cust_Name;
	
	@Column(name = "Phone_No")
	private long phone_No;
	
	@Column(name = "Email")
	private String email;
	
	@Column(name = "Gender")
	private char gender;
	
	@Column(name = "Redeem_Points")
	private int redeem_points;
	
	@Column(name = "AddLine1")
	private String addline1;
	
	@Column(name = "AddLine2")
	private String addline2;
	
	@Column(name = "City")
	private String city;
	
	@Column(name = "Pincode")
	private long pincode;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "cust_Id" , referencedColumnName = "cust_Id")
	private Set<Invoice> invoices;
	

	
	/*
	 * @OneToOne(cascade = CascadeType.ALL)
	 * 
	 * @JoinColumn(name = "cust_id", referencedColumnName = "cust_Id") private
	 * Authentication authentication;
	 */
	
	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Customer(int cust_Id, String cust_Name, long phone_No, String email, char gender, int redeem_points,
			String addline1, String addline2, String city, long pincode) {
		super();
		this.cust_Id = cust_Id;
		this.cust_Name = cust_Name;
		this.phone_No = phone_No;
		this.email = email;
		this.gender = gender;
		this.redeem_points = redeem_points;
		this.addline1 = addline1;
		this.addline2 = addline2;
		this.city = city;
		this.pincode = pincode;
	}
	
	
	public int getCust_Id() {
		return cust_Id;
	}
	public void setCust_Id(int cust_Id) {
		this.cust_Id = cust_Id;
	}
	
	public String getCust_Name() {
		return cust_Name;
	}
	public void setCust_Name(String cust_Name) {
		this.cust_Name = cust_Name;
	}
	
	public long getPhone_No() {
		return phone_No;
	}
	public void setPhone_No(long phone_No) {
		this.phone_No = phone_No;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public char getGender() {
		return gender;
	}
	public void setGender(char gender) {
		this.gender = gender;
	}
	
	public int getRedeem_points() {
		return redeem_points;
	}
	public void setRedeem_points(int reedeem_points) {
		this.redeem_points = reedeem_points;
	}
	
	public String getAddline1() {
		return addline1;
	}
	public void setAddline1(String addline1) {
		this.addline1 = addline1;
	}
	
	public String getAddline2() {
		return addline2;
	}
	public void setAddline2(String addline2) {
		this.addline2 = addline2;
	}
	
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	public long getPincode() {
		return pincode;
	}
	public void setPincode(long pincode) {
		this.pincode = pincode;
	}

	public Set<Invoice> getInvoices() {
		return invoices;
	}

	public void setInvoices(Set<Invoice> invoices) {
		this.invoices = invoices;
	}
	
	
	
}