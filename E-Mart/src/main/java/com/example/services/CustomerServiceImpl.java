package com.example.services;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.entities.Customer;
import com.example.repositories.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	private CustomerRepository c_repository;
	
	@Override
	public void save(Customer customer) {
		c_repository.save(customer);
	}

	@Override
	public Optional<Customer> getCustomerById(int cId) {
		return c_repository.findById(cId);
	}


}
