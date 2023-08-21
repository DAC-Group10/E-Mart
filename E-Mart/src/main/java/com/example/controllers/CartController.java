package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Cart;
import com.example.services.CartService;

@RestController
public class CartController {
	
	@Autowired
	private CartService cart_Service;
	
	@PostMapping(value = "api/addCart")
	public void addCart(@RequestBody Cart cart) {
		cart_Service.addCart(cart);
	}
	
	@PutMapping(value = "api/addByProduct/{cid}")
	public void addByProduct(@RequestBody Cart cart , @PathVariable int cid) {
		cart_Service.addByProject(cart, cid);
	}
}
