package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.entities.Category;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface CategoryRepository extends JpaRepository<Category, Integer> {
	
	@Query("from Category c where c.subcat_Id=:subcat_Id")
	List<Category> getCategory(@Param("subcat_Id") String subcat_Id);
	

}
