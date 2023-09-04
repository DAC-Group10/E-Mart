package com.example.entities;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "CategoryMaster")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name="catmasterID")
	private int catmaster_Id;
	
	//@Column(name="cat_id")
	private String cat_Id;
	
	//@Column(name="subcat_id")
	private String subcat_Id;
	
	//@Column(name="categoryName")
	private String categoryName;
	
	//@Column(name="flag")
	private boolean flag;
	
	//@Column(name= "catImgPath",nullable = false)
	private String catImgPath;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "catmaster_Id",referencedColumnName = "catmaster_Id")
	private Set<Product> products;

	public Category() {
		super();
	}

	public Category(int catmaster_Id, String cat_Id, String subcat_Id, String categoryName, boolean flag,
			String catImgPath, Set<Product> products) {
		super();
		this.catmaster_Id = catmaster_Id;
		this.cat_Id = cat_Id;
		this.subcat_Id = subcat_Id;
		this.categoryName = categoryName;
		this.flag = flag;
		this.catImgPath = catImgPath;
		this.products = products;
	}

	public int getCatmaster_Id() {
		return catmaster_Id;
	}

	public void setCatmaster_Id(int catmaster_Id) {
		this.catmaster_Id = catmaster_Id;
	}

	public String getCat_Id() {
		return cat_Id;
	}

	public void setCat_Id(String cat_Id) {
		this.cat_Id = cat_Id;
	}

	public String getSubcat_Id() {
		return subcat_Id;
	}

	public void setSubcat_Id(String subcat_Id) {
		this.subcat_Id = subcat_Id;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public boolean isFlag() {
		return flag;
	}

	public void setFlag(boolean flag) {
		this.flag = flag;
	}

	public String getCatImgPath() {
		return catImgPath;
	}

	public void setCatImgPath(String catImgPath) {
		this.catImgPath = catImgPath;
	}

	public Set<Product> getProducts() {
		return products;
	}

	public void setProducts(Set<Product> products) {
		this.products = products;
	}

	
}
