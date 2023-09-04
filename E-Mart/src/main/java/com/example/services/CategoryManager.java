package com.example.services;

import java.util.List;
import java.util.Optional;
import com.example.entities.Category;

public interface CategoryManager {
	List<Category> getCategories();
	Optional<Category> getCategory(int id);
	List<Category> getCategory(String subcatid);
}
