package com.example.services;

import java.util.List;
import com.example.entities.Cart;

public interface CartService {
	List<Cart> getCart();
	void addCart(Cart cart);
	void addByProject(Cart cart, int cid);
}
