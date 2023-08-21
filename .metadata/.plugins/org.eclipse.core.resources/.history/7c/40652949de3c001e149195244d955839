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
@Table(name="ProductMaster")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Prod_Id")
	private int prod_id;
	
	@Column (name="ProdShortDesc")
	private String prodShortDesc;

	@Column (name="prodLongDesc")
	private String prodLongDesc;
	
	@Column (name="MrpPrice")
	private double mrpPrice;
	
	@Column (name="CardHoldersPrice")
	private double cardholdersPrice;
	
	@Column (name="PointsToBeRedm")
	private int pointsToBeRedm;

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(String prodShortDesc, String prodLongDesc, double mrpPrice, double cardholdersPrice,
			int pointsToBeRedm) {
		super();
		this.prodShortDesc = prodShortDesc;
		this.prodLongDesc = prodLongDesc;
		this.mrpPrice = mrpPrice;
		this.cardholdersPrice = cardholdersPrice;
		this.pointsToBeRedm = pointsToBeRedm;
	}

	public int getProd_id() {
		return prod_id;
	}

	public void setProd_id(int prod_id) {
		this.prod_id = prod_id;
	}

	public String getProdShortDesc() {
		return prodShortDesc;
	}

	public void setProdShortDesc(String prodShortDesc) {
		this.prodShortDesc = prodShortDesc;
	}

	public String getProdLongDesc() {
		return prodLongDesc;
	}

	public void setProdLongDesc(String prodLongDesc) {
		this.prodLongDesc = prodLongDesc;
	}

	public double getMrpPrice() {
		return mrpPrice;
	}

	public void setMrpPrice(double mrpPrice) {
		this.mrpPrice = mrpPrice;
	}

	public double getCardholdersPrice() {
		return cardholdersPrice;
	}

	public void setCardholdersPrice(double cardholdersPrice) {
		this.cardholdersPrice = cardholdersPrice;
	}

	public int getPointsToBeRedm() {
		return pointsToBeRedm;
	}

	public void setPointsToBeRedm(int pointsToBeRedm) {
		this.pointsToBeRedm = pointsToBeRedm;
	}

	@Override
	public String toString() {
		return "Product [prod_id=" + prod_id + ", prodShortDesc=" + prodShortDesc
				+ ", prodLongDesc=" + prodLongDesc + ", mrpPrice=" + mrpPrice + ", cardholdersPrice=" + cardholdersPrice
				+ ", pointsToBeRedm=" + pointsToBeRedm + "]";
	}
	
	
}
;