package com.example.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.entities.Category;
import com.example.repositories.CategoryRepository;

@Service
public class CategoryManagerImpl implements CategoryManager {
	
	@Autowired
	CategoryRepository repository;

	@Override
	public List<Category> getCategories() {
		return repository.findAll();
	}

	@Override
	public Optional<Category> getCategory(int id) {
		
		return repository.findById(id);
	}

	@Override
	public List<Category> getCategory(String subcatid) {
		// TODO Auto-generated method stub
		return repository.getCategory(subcatid);
	}

}
