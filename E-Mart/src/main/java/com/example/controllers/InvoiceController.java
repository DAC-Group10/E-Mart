package com.example.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.entities.Invoice;
import com.example.services.InvoiceManager;

@RestController
public class InvoiceController
{
	@Autowired
	public InvoiceManager inv_mgr;
	
	@GetMapping("api/invoice")
	public List<Invoice> getInvoices()
	{
		return inv_mgr.getInvoices();
	}
	
}
