package com.example.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Product;
import com.example.services.ProductService;

@RestController
public class ProductController {
	
	@Autowired
	private ProductService p_service;
	
	@GetMapping(value = "api/getAllProducts")
	public List<Product> getAllProducts(){
		return p_service.getAllProducts();
	}
	
	@GetMapping(value = "api/getProductsByName/{pName}")
	public List<Product> getProductsByName(@PathVariable String pName){
		return p_service.getAllProductsByName(pName);
	}
	
	@GetMapping(value = "api/getProductsById/{pId}")
	public Optional<Product> getProductsById(@PathVariable int pId){
		return p_service.getAllProductsById(pId);
	}
	
}
