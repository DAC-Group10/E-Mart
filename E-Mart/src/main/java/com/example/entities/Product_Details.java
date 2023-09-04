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
	//@Column(name = "Prod_Dtl_Id") 
	private int prodDetail_id;
	
	//@Column(name = "Config_Dtls")
	private int configDetails;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "config_Id",referencedColumnName = "config_Id")
	private Config config;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "prod_Id",referencedColumnName = "prod_Id")
	private Product product;
	
	public Product_Details() {
		super();
	}

	public Product_Details(int prodDetail_id, int configDetails, Config config, Product product) {
		super();
		this.prodDetail_id = prodDetail_id;
		this.configDetails = configDetails;
		this.config = config;
		this.product = product;
	}

	public int getProdDetail_id() {
		return prodDetail_id;
	}

	public void setProdDetail_id(int prodDetail_id) {
		this.prodDetail_id = prodDetail_id;
	}

	public int getConfigDetails() {
		return configDetails;
	}

	public void setConfigDetails(int configDetails) {
		this.configDetails = configDetails;
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