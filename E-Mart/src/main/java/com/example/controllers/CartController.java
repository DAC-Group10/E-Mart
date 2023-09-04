package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Cart;
import com.example.services.CartService;

@RestController
@CrossOrigin
public class CartController {
	
	@Autowired
	private CartService cart_Service;
	
	@GetMapping(value = "api/getCart")
	public List<Cart> getCart(){
		return cart_Service.getCart();
	}
	
	@GetMapping(value = "api/getCartByCustomer/{custid}")
	public List<Cart> getCartByCustomer(@PathVariable int custid){
		return cart_Service.getCartByCustomer(custid);
	}
	
	@PostMapping(value = "api/addCart")
	public void addCart(@RequestBody Cart cart) {
		cart_Service.addCart(cart);
	}
	
	@PutMapping(value = "api/addByProduct/{cid}")
	public void addByProduct(@RequestBody Cart cart , @PathVariable int cid) {
		cart_Service.addByProject(cart, cid);
	}
	
	@DeleteMapping(value = "api/deleteCart/{cartid}")
	public void deleteCart(@PathVariable int cartid) {
		cart_Service.deleteCartById(cartid);
	}
	
	@DeleteMapping(value = "api/deleteCartByCustomer/{custid}")
	public void deleteCartByCustomer(@PathVariable int custid) {
		cart_Service.deleteByCustId(custid);
	}
	
	@PutMapping(value = "api/updateQuantity/{qty}/{prodid}/{custid}")
	public void updateQuantity(@PathVariable int qty , @PathVariable int prodid, @PathVariable int custid) {
		cart_Service.updateQuantity(qty, prodid, custid);
	}
}
