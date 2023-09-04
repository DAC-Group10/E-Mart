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
@Table(name="Invoice_Details")
public class Invoice_Details {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name = "invoice_dtl_id")
	private int invdtl_Id;

	//@Column(name="mrp")
	private double mrp;
	
	//@Column(name = "card_holder_price")
	private double cardHolderPrice;

	//@Column(name = "points reedemed")
	private int pointsReedemed;
	
	//@Column(name = "DeliveryCharges")
	private double delivery_charges;
	
	//Column(name = "ProdQty")
	private int prodQty;
	
	//@Column(name = "Total")
	private double total;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "invoice_Id",referencedColumnName = "invoice_Id")
	private Invoice invoice;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "prod_Id",referencedColumnName = "prod_Id")
	private Product product;

	public Invoice_Details() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Invoice_Details(int invdtl_Id, double mrp, double cardHolderPrice, int pointsReedemed,
			double delivery_charges, int prodQty, double total, Invoice invoice, Product product) {
		super();
		this.invdtl_Id = invdtl_Id;
		this.mrp = mrp;
		this.cardHolderPrice = cardHolderPrice;
		this.pointsReedemed = pointsReedemed;
		this.delivery_charges = delivery_charges;
		this.prodQty = prodQty;
		this.total = total;
		this.invoice = invoice;
		this.product = product;
	}

	public int getInvdtl_Id() {
		return invdtl_Id;
	}

	public void setInvdtl_Id(int invdtl_Id) {
		this.invdtl_Id = invdtl_Id;
	}

	public double getMrp() {
		return mrp;
	}

	public void setMrp(double mrp) {
		this.mrp = mrp;
	}

	public double getCardHolderPrice() {
		return cardHolderPrice;
	}

	public void setCardHolderPrice(double cardHolderPrice) {
		this.cardHolderPrice = cardHolderPrice;
	}

	public int getPointsReedemed() {
		return pointsReedemed;
	}

	public void setPointsReedemed(int pointsReedemed) {
		this.pointsReedemed = pointsReedemed;
	}

	public double getDelivery_charges() {
		return delivery_charges;
	}

	public void setDelivery_charges(double delivery_charges) {
		this.delivery_charges = delivery_charges;
	}

	public int getProdQty() {
		return prodQty;
	}

	public void setProdQty(int prodQty) {
		this.prodQty = prodQty;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public Invoice getInvoice() {
		return invoice;
	}

	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	
}

