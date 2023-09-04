package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.entities.Cart;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface CartRepository extends JpaRepository<Cart, Integer>{
	
	@Query("from Cart c where c.cust_Id=:custid")
	List<Cart> getCartByCustomer(@Param("custid") int custid);
	
	@Modifying
	@Query(value="delete from Cart where cust_Id=:custid", nativeQuery = true)
	void deleteCartByCustomer(@Param("custid") int custid);
	
	@Modifying
	@Query(value = "update cart set quantity = quantity +:Qty  where prod_id=:prodId  and cust_id=:custId" , nativeQuery = true)
	public void updateQuantity(@Param("Qty") int Qty,@Param("prodId") int prodId,@Param("custId")int custId);
	
}
