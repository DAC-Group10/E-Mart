package com.example.entities;

import java.util.Set;

import jakarta.persistence.*;

@Entity
@Table(name = "Customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name = "cust_Id")
	private int cust_Id;
	
	//@Column(name = "Cust_Name")
	private String custName;
	
	//@Column(name = "Phone_No")
	private long phoneNo;
	
	//@Column(name = "Email")
	private String email;
	
	//@Column(name = "Gender")
	private char gender;
	
	//@Column(name = "Redeem_Points")
	private int redeemPoints;
	
	//@Column(name = "AddLine1")
	private String addLine1;
	
	//@Column(name = "AddLine2")
	private String addLine2;
	
	//@Column(name = "City")
	private String city;
	
	//@Column(name = "Pincode")
	private long pincode;
	
//	@OneToMany(cascade = CascadeType.ALL)
//	@JoinColumn(name = "cust_Id" , referencedColumnName = "cust_Id")
//	private Set<Invoice> invoices;
	

	
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



	public Customer(int cust_Id, String custName, long phoneNo, String email, char gender, int redeemPoints,
			String addLine1, String addLine2, String city, long pincode) {
		super();
		this.cust_Id = cust_Id;
		this.custName = custName;
		this.phoneNo = phoneNo;
		this.email = email;
		this.gender = gender;
		this.redeemPoints = redeemPoints;
		this.addLine1 = addLine1;
		this.addLine2 = addLine2;
		this.city = city;
		this.pincode = pincode;
	}



	public int getCust_Id() {
		return cust_Id;
	}



	public void setCust_Id(int cust_Id) {
		this.cust_Id = cust_Id;
	}



	public String getCustName() {
		return custName;
	}



	public void setCustName(String custName) {
		this.custName = custName;
	}



	public long getPhoneNo() {
		return phoneNo;
	}



	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
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



	public int getRedeemPoints() {
		return redeemPoints;
	}



	public void setRedeemPoints(int redeemPoints) {
		this.redeemPoints = redeemPoints;
	}



	public String getAddLine1() {
		return addLine1;
	}



	public void setAddLine1(String addLine1) {
		this.addLine1 = addLine1;
	}



	public String getAddLine2() {
		return addLine2;
	}



	public void setAddLine2(String addLine2) {
		this.addLine2 = addLine2;
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


}