package com.example.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.entities.Invoice;
import com.example.repositories.InvoiceRepository;

@Service
public class InvoiceManagerImpl implements InvoiceManager 
{
	@Autowired
	private InvoiceRepository i_repo;
	
	@Override
	public List<Invoice> getInvoices() {
		return i_repo.findAll();
	}

}
