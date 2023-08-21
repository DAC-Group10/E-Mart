package com.example.entities;

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
	@Column(name="inv_Id")
    private int inv_Id; 
	
	@Column(name="InvDt")
    private String invDt;
	
	@Column(name="TotalAmt")
    private double totalAmt;
	
	@Column(name="Tax")
    private double tax;
	
	@Column(name="PayableAmt")
    private double payableAmt;

    public Invoice() {
        super();
    }

    public Invoice(String invDt, double totalAmt, double tax, double payableAmt) {
        this.invDt = invDt;
        this.totalAmt = totalAmt;
        this.tax = tax;
        this.payableAmt = payableAmt;
    }

    public int getInvId() {
        return inv_Id;
    }

    public void setInvId(int invId) {
        this.inv_Id = invId;
    }

    public String getInvDt() {
        return invDt;
    }

    public void setInvDt(String invDt) {
        this.invDt = invDt;
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

    @Override
    public String toString() {
        return "Invoice{" +
                "invId=" + inv_Id +
                ", invDt='" + invDt + '\'' +
                ", totalAmt=" + totalAmt +
                ", tax=" + tax +
                ", payableAmt=" + payableAmt +
                '}';
    }
}
