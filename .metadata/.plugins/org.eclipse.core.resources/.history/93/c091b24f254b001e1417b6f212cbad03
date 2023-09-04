package com.example.entities;

import jakarta.persistence.*;

@Entity
@Table(name="Cart")
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private int cart_Id;
	
	public int cust_Id;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "prod_Id",referencedColumnName = "prod_Id")
	private Product product;

	public Cart() {
		super();
	}

	public Cart(int cart_Id, int cust_Id, Product product) {
		super();
		this.cart_Id = cart_Id;
		this.cust_Id = cust_Id;
		this.product = product;
	}

	public int getCart_Id() {
		return cart_Id;
	}

	public void setCart_Id(int cart_Id) {
		this.cart_Id = cart_Id;
	}

	public int getCust_Id() {
		return cust_Id;
	}

	public void setCust_Id(int cust_Id) {
		this.cust_Id = cust_Id;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

}