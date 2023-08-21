package com.example.entities;

import jakarta.persistence.*;

@Entity
@Table(name="Cart")
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Cart_Id")
	private int cart_Id;
	
	@Column(name = "Quantity")
	private int quantity;
	
	@Column(name = "Price")
	private double price;
	
	@Column(name = "Delivery_Charges")
	private double delivery_Charges;
	
	@Column(name = "Discount")
	private double discount;
	
	@Column(name = "Total")
	private double total;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "Cust_Id",referencedColumnName = "cust_Id")
	public Customer customer;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "prod_id",referencedColumnName = "prod_id")
	private Product product;

	public Cart() {
		super();
	}
	
	public Cart(int cart_Id, int quantity, double price, double delivery_Charges,
			double discount, double total) {
		super();
		this.cart_Id = cart_Id;
		this.quantity = quantity;
		this.price = price;
		this.delivery_Charges = delivery_Charges;
		this.discount = discount;
		this.total = total;
	}

	
	public int getCart_Id() {
		return cart_Id;
	}

	public void setCart_Id(int cart_Id) {
		this.cart_Id = cart_Id;
	}

	
	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	
	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	
	public double getDelivery_Charges() {
		return delivery_Charges;
	}

	public void setDelivery_Charges(double delivery_Charges) {
		this.delivery_Charges = delivery_Charges;
	}

	
	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	
	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}
	
	
	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
		
}