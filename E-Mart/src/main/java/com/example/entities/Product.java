package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="ProductMaster")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name="Prod_Id")
	private int prod_Id;
	
	//@Column (name="ProdShortDesc")
	private String prodName;

	//@Column (name="prodLongDesc")
	private String prodDescription;
	
	//@Column (name="MrpPrice")
	private double mrpPrice;
	
	private String prodImage;
	
	//@Column (name="CardHoldersPrice")
	private double cardholdersPrice;
	
	//@Column (name="PointsToBeRedm")
	private int pointsToBeRedeem;

	public Product() {
		super();
	}

	
	public int getProd_Id() {
		return prod_Id;
	}

	public void setProd_Id(int prod_Id) {
		this.prod_Id = prod_Id;
	}


	public String getProdName() {
		return prodName;
	}


	public void setProdName(String prodName) {
		this.prodName = prodName;
	}


	public String getProdDescription() {
		return prodDescription;
	}


	public void setProdDescription(String prodDescription) {
		this.prodDescription = prodDescription;
	}


	public double getMrpPrice() {
		return mrpPrice;
	}


	public void setMrpPrice(double mrpPrice) {
		this.mrpPrice = mrpPrice;
	}


	public String getProdImage() {
		return prodImage;
	}


	public void setProdImage(String prodImage) {
		this.prodImage = prodImage;
	}


	public double getCardholdersPrice() {
		return cardholdersPrice;
	}


	public void setCardholdersPrice(double cardholdersPrice) {
		this.cardholdersPrice = cardholdersPrice;
	}


	public int getPointsToBeRedeem() {
		return pointsToBeRedeem;
	}


	public void setPointsToBeRedeem(int pointsToBeRedeem) {
		this.pointsToBeRedeem = pointsToBeRedeem;
	}


	public Product(int prod_Id, String prodName, String prodDescription, double mrpPrice, String prodImage,
			double cardholdersPrice, int pointsToBeRedeem) {
		super();
		this.prod_Id = prod_Id;
		this.prodName = prodName;
		this.prodDescription = prodDescription;
		this.mrpPrice = mrpPrice;
		this.prodImage = prodImage;
		this.cardholdersPrice = cardholdersPrice;
		this.pointsToBeRedeem = pointsToBeRedeem;
	}


	@Override
	public String toString() {
		return "Product [prod_Id=" + prod_Id + ", prodName=" + prodName + ", prodDescription=" + prodDescription
				+ ", mrpPrice=" + mrpPrice + ", prodImage=" + prodImage + ", cardholdersPrice=" + cardholdersPrice
				+ ", pointsToBeRedeem=" + pointsToBeRedeem + "]";
	}

	
	
	
}
;