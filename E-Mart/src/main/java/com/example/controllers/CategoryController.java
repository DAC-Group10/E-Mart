package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.entities.Category;
import com.example.services.CategoryManager;

@RestController  
@CrossOrigin
public class CategoryController {
	@Autowired
	CategoryManager manager;
	
//	@GetMapping(value = "api/categories")
//	 public List<Category> showCaregories1()
//	 {
//		  return manager.getCategories();
//	 }
	
	@GetMapping(value = "api/category/{subcat_Id}")
	 public List<Category> getSubCat(@PathVariable String subcat_Id)
	 {
		  return manager.getCategory(subcat_Id); 
		
	 }

}
