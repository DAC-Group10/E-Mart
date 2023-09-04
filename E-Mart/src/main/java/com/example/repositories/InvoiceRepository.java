package com.example.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.entities.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice,Integer> 
{

	@Query("from Invoice where cust_Id=:custid")
	List<Invoice> getInvoicesBycustId(@Param("custid") int custid);
	
	@Query(value="select * from Invoice where invoice_Id=(select max(invoice_Id) from Invoice)", nativeQuery = true)
	Optional<Invoice> getInvoiceById();
		
}
