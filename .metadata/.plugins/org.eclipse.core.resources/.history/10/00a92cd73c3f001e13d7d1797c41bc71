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
	@Column(name = "invoice_dtl_id")
	private int invdtl_Id;

	@Column(name="mrp")
	private double mrp;
	
	@Column(name = "card_holder_price")
	private double card_holder_price;

	@Column(name = "points reedemed")
	private int points_reedemed;
	
	@Column(name = "DeliveryCharges")
	private double delivery_charges;
	
	@Column(name = "ProdQty")
	private int prod_qty;
	
	@Column(name = "Total")
	private double total;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "inv_Id",referencedColumnName = "inv_Id")
	private Invoice invoice;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "prod_id",referencedColumnName = "prod_id")
	private Product product;

	public Invoice_Details() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Invoice_Details(int invdtl_Id, double mrp, double card_holder_price, int points_reedemed,
			double delivery_charges, int prod_qty, double total, Invoice invoice, Product product) {
		super();
		this.invdtl_Id = invdtl_Id;
		this.mrp = mrp;
		this.card_holder_price = card_holder_price;
		this.points_reedemed = points_reedemed;
		this.delivery_charges = delivery_charges;
		this.prod_qty = prod_qty;
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

	public int getProd_qty() {
		return prod_qty;
	}

	public void setProd_qty(int prod_qty) {
		this.prod_qty = prod_qty;
	}

	public void setMrp(double mrp) {
		this.mrp = mrp;
	}

	public double getCard_holder_price() {
		return card_holder_price;
	}

	public void setCard_holder_price(double card_holder_price) {
		this.card_holder_price = card_holder_price;
	}

	public int getPoints_reedemed() {
		return points_reedemed;
	}

	public void setPoints_reedemed(int points_reedemed) {
		this.points_reedemed = points_reedemed;
	}

	public double getDelivery_charges() {
		return delivery_charges;
	}

	public void setDelivery_charges(double delivery_charges) {
		this.delivery_charges = delivery_charges;
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

