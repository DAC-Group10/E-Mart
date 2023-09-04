package com.example.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.entities.Invoice;
import com.example.services.InvoiceManager;

@RestController
@CrossOrigin
public class InvoiceController
{
	@Autowired
	public InvoiceManager inv_mgr;
	
	@GetMapping("api/invoices")
	public List<Invoice> getInvoices()
	{
		return inv_mgr.getInvoices();
	}
	
	@GetMapping("api/getInvoiceBycustId/{custid}")
	public List<Invoice> getInvoice(@PathVariable int custid){
		return inv_mgr.getInvoices(custid);
	}
	
	@GetMapping("api/getInvoiceByMaxId")
	public Optional<Invoice> getInvoice(){
		return inv_mgr.getInvoice();
	}
	
	@PostMapping("api/addInvoice")
	public void addInvoice(@RequestBody Invoice invoice) {
		inv_mgr.addInvoice(invoice);
	}
	
}
