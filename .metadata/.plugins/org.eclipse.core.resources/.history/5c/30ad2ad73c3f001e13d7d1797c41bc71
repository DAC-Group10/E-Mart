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
	@Column(name="catmasterID")
	private int catmasterID;
	
	@Column(name="cat_id")
	private String cat_id;
	
	@Column(name="subcat_id")
	private String subcat_id;
	
	@Column(name="categoryName")
	private String categoryName;
	
	@Column(name="flag")
	private boolean flag;
	
	@Column(name= "catImgPath",nullable = false)
	private String catImgPath;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "catmaster_Id",referencedColumnName = "catmasterID")
	private Set<Product> products;

	public Category() {
		super();
	}

	public Category(String cat_id, String subcat_id, String categoryName, boolean flag, String catImgPath) {
		super();
		this.cat_id = cat_id;
		this.subcat_id = subcat_id;
		this.categoryName = categoryName;
		this.flag = flag;
		this.catImgPath = catImgPath;
	}

	public int getCatmasterID() {
		return catmasterID;
	}

	public void setCatmasterID(int catmasterID) {
		this.catmasterID = catmasterID;
	}

	public String getCat_id() {
		return cat_id;
	}

	public void setCat_id(String cat_id) {
		this.cat_id = cat_id;
	}

	public String getSubcat_id() {
		return subcat_id;
	}

	public void setSubcat_id(String subcat_id) {
		this.subcat_id = subcat_id;
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

	@Override
	public String toString() {
		return "Category [catmasterID=" + catmasterID + ", cat_id=" + cat_id + ", subcat_id=" + subcat_id
				+ ", categoryName=" + categoryName + ", flag=" + flag + ", catImgPath=" + catImgPath + "]";
	}
	
	
	
}
