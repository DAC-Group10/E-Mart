package com.example.services;

import java.util.List;
import java.util.Optional;
import com.example.entities.Product;


public interface ProductService {
	List<Product> getAllProducts();
	List<Product> getAllProductsByName(String pName);
	List<Product> getProductByCat(String cat);
	Optional<Product> getProductsById (int pId);
}
