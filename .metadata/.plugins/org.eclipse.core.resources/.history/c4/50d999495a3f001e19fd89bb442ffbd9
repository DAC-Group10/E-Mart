package com.example.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Product_Details")
public class Product_Details {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Prod_Dtl_Id") 
	private int prod_Dtl_id;
	
	@Column(name = "Config_Dtls")
	private int config_Dtls;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "configID",referencedColumnName = "configID")
	private Config config;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "prod_id",referencedColumnName = "prod_id")
	private Product product;
	
	public Product_Details() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product_Details(int prod_Dtl_id, int config_Dtls) {
		super();
		this.prod_Dtl_id = prod_Dtl_id;
		this.config_Dtls = config_Dtls;
	}
	 
	public int getProd_Dtl_id() {
		return prod_Dtl_id;
	}
	public void setProd_Dtl_id(int prod_Dtl_id) {
		this.prod_Dtl_id = prod_Dtl_id;
	}
	
	
	public int getConfig_Dtls() {
		return config_Dtls;
	}
	public void setConfig_Dtls(int config_Dtls) {
		this.config_Dtls = config_Dtls;
	}
	public Config getConfig() {
		return config;
	}
	public void setConfig(Config config) {
		this.config = config;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	
	


}