package com.example.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Product_Details;
import com.example.repositories.ProductDtlRepository;

@Service
public class ProductDtlManagerImpl implements ProductDtlManager {

	@Autowired
	ProductDtlRepository repository;
	
	@Override
	public Optional<Product_Details> getProductDetails(int id) {

		Optional<Product_Details> pd = repository.findById(id);
		return pd;
	}

}
