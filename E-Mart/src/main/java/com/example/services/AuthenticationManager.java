package com.example.services;

import java.util.Optional;
import com.example.entities.Authentication;

public interface AuthenticationManager {
	
	void addAuthentication(Authentication auth);
	Optional<Authentication> getAuthentication(int Auth_id);
}
