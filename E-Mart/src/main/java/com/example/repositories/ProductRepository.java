package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
	 List<Product> findByProdName(String desc);
	 
	 @Query(value = "select * from product_master p where p.catmaster_id=:cat", nativeQuery = true)
	 List<Product> findProductBySubcategory(@Param("cat") String cat);
	 
//	 @Query("from Product p where p.catmaster_id=:catmasterid")
//	 List<Product> ProductByCatmasterId(@Param("catmasterid") String catmasterid);
	 
}