package com.example.services;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.entities.Config;
import com.example.repositories.ConfigRepository;

public class ConfigManagerImpl implements ConfigManager {

	@Autowired
	ConfigRepository repository;
	
	@Override
	public Optional<Config> getConfig(int id) {

		Optional<Config> conf = repository.findById(id);
		return conf;
	}

}
