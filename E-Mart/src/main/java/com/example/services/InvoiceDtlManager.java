package com.example.services;

import java.util.Optional;
import com.example.entities.Invoice_Details;

public interface InvoiceDtlManager {
	Optional<Invoice_Details> getInvoiceDtl(int id);
	void addInvoiceDtl(Invoice_Details invdtl);
}
