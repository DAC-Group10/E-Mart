package com.example.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Invoice")
public class Invoice {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name="inv_Id")
    private int invoice_Id;
	
	//@Column(name="InvDt")
    private Date invDate;
	
	//@Column(name="TotalAmt")
    private double totalAmt;
	
	//@Column(name="Tax")
    private double tax;
    	
	//@Column(name="PayableAmt")
    private double payableAmt;
    
	private int cust_Id;

    public Invoice() {
        super();
    }

    public Invoice(int invoice_Id, Date invDate, double totalAmt, double tax, double deliveryCharge, double payableAmt,
			int cust_Id) {
		super();
		this.invoice_Id = invoice_Id;
		this.invDate = invDate;
		this.totalAmt = totalAmt;
		this.tax = tax;
//		this.deliveryCharge = deliveryCharge;
		this.payableAmt = payableAmt;
		this.cust_Id = cust_Id;
	}


	public int getInvoice_Id() {
		return invoice_Id;
	}

	public void setInvoice_Id(int invoice_Id) {
		this.invoice_Id = invoice_Id;
	}

	public Date getInvDate() {
		return invDate;
	}

	public void setInvDate(Date invDate) {
		this.invDate = invDate;
	}

	public double getTotalAmt() {
		return totalAmt;
	}

	public void setTotalAmt(double totalAmt) {
		this.totalAmt = totalAmt;
	}

	public double getTax() {
		return tax;
	}

	public void setTax(double tax) {
		this.tax = tax;
	}

	public double getPayableAmt() {
		return payableAmt;
	}

	public void setPayableAmt(double payableAmt) {
		this.payableAmt = payableAmt;
	}


	public int getCust_Id() {
		return cust_Id;
	}


	public void setCust_Id(int cust_Id) {
		this.cust_Id = cust_Id;
	}

//	public double getDeliveryCharge() {
//		return deliveryCharge;
//	}
//
//	public void setDeliveryCharge(double deliveryCharge) {
//		this.deliveryCharge = deliveryCharge;
//	}
	
}
