package com.example.services;

import java.util.Optional;
import com.example.entities.Customer;

public interface CustomerService {
	void save(Customer customer);
	Optional<Customer> getCustomerById(int cId);
	void updateCustomer(int custid, Customer c);
}
