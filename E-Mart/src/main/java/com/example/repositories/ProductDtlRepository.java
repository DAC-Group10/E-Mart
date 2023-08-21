package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.Product_Details;

@Repository
public interface ProductDtlRepository extends JpaRepository<Product_Details, Integer> {

}
