package com.example.services;
import java.util.List;
import com.example.entities.Invoice;

public interface InvoiceManager 
{
	List<Invoice> getInvoices();
	
}
