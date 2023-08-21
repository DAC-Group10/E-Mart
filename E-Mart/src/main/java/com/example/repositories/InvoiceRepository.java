package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.entities.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice,Integer> 
{
	
	
}
