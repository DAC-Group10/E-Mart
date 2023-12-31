package com.example.controllers;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.services.AuthenticationManager;
import com.example.entities.Authentication;

@RestController
@CrossOrigin
public class AuthenticationController {
	
	@Autowired
	private AuthenticationManager manager;
		
	@GetMapping(value = "api/AuthenticationById/{id}")
	 public Optional<Authentication> getPro(@PathVariable int id)
	 {
		Optional<Authentication> p=manager.getAuthentication(id);
		return p;
	 }
	
	@PostMapping(value = "api/addAuthentication")
	public void addAuthentication(@RequestBody Authentication auth)
	{
		manager.addAuthentication(auth);
	}
	
	@GetMapping(value = "api/getbyusername/{uname}")
	public Optional<Authentication> getAuth(@PathVariable String uname){
		return manager.getbyusername(uname);
	}

}

