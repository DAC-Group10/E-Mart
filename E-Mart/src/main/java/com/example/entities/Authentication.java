package com.example.entities;

import jakarta.persistence.*;

@Entity
@Table(name="Authentication")
public class Authentication {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="auth_id")
	private int auth_id;
			
	@Column(name="uname")
	private String uname;

	@Column(name="pass")
	private String pass;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "Cust_Id",referencedColumnName = "cust_Id")
	public Customer customer;

	public Authentication() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Authentication(int auth_id, String uname, String pass) {
		super();
		this.auth_id = auth_id;
		this.uname = uname;
		this.pass = pass;
	}

	public int getAuth_id() {
		return auth_id;
	}

	public void setAuth_id(int auth_id) {
		this.auth_id = auth_id;
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