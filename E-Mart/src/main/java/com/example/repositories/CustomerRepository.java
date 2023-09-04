package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.entities.Customer;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface CustomerRepository extends JpaRepository<Customer, Integer>{

	@Modifying
	@Query("UPDATE Customer c SET c.addLine1 = :addLine1, c.addLine2 = :addLine2, c.city = :city, c.custName = :custName, c.email = :email, c.gender = :gender, c.phoneNo = :phoneNo, c.pincode = :pincode, c.redeemPoints = :redeemPoints WHERE c.cust_Id = :cust_Id")
	void updateCustomer(@Param("cust_Id") int cust_Id, @Param("addLine1") String addLine1, @Param("addLine2") String addLine2, @Param("city") String city, @Param("custName") String custName, @Param("email") String email, @Param("gender") char gender, @Param("phoneNo") long phoneNo, @Param("pincode") long pincode, @Param("redeemPoints") int redeemPoints);
	
}
