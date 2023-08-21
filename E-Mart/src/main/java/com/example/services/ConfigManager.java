package com.example.services;

import java.util.Optional;
import com.example.entities.Config;

public interface ConfigManager {
	
	Optional<Config> getConfig(int id);

}
