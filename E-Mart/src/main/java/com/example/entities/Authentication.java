package com.example.entities;

import jakarta.persistence.*;

@Entity
@Table(name="Authentication")
public class Authentication {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	//@Column(name="auth_id")
	private int auth_Id;
			
	//@Column(name="uname")
	private String uname;

	//@Column(name="pass")
	private String pass;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cust_Id",referencedColumnName = "cust_Id")
	public Customer customer;

	public Authentication() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Authentication(int auth_Id, String uname, String pass) {
		super();
		this.auth_Id = auth_Id;
		this.uname = uname;
		this.pass = pass;
	}

	public int getAuth_id() {
		return auth_Id;
	}

	public void setAuth_id(int auth_id) {
		this.auth_Id = auth_id;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}	
}