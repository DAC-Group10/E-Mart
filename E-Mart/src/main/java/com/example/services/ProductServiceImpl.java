package com.example.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.entities.Product;
import com.example.repositories.ProductRepository;


@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepository p_repository;
	
	@Override
	public List<Product> getAllProducts() {
		return p_repository.findAll();
	}

	@Override
	public List<Product> getAllProductsByName(String desc) {
		return p_repository.findByProdShortDesc(desc);
	}

	@Override
	public Optional<Product> getAllProductsById(int pId) {
		return p_repository.findById(pId);
	}
	

}
