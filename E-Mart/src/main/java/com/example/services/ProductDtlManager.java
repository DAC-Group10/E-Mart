package com.example.services;

import java.util.Optional;

import com.example.entities.Product_Details;

public interface ProductDtlManager {
	Optional<Product_Details> getProductDetails(int id);
}
