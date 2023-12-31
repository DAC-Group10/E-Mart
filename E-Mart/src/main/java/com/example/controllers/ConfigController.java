package com.example.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Config;
import com.example.services.ConfigManager;

public class ConfigController {
	
	@Autowired
	ConfigManager manager;
	
	@GetMapping(value = "api/getConfig/{id}")
	public Optional<Config> getConfig(@PathVariable int id){
		return manager.getConfig(id);
	}

}
