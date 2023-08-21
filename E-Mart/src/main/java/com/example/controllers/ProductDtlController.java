package com.example.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Product_Details;
import com.example.services.ProductDtlManager;

@RestController
public class ProductDtlController {
	
	@Autowired
	ProductDtlManager manager;
	
	@GetMapping(value = "api/getProductDetails/{id}")
	public Optional<Product_Details> getProductDetails(@PathVariable int id) {
		return manager.getProductDetails(id);
	}
}
