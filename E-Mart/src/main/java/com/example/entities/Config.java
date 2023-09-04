package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="ConfigMaster")
public class Config {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name="ConfigID")
	private int config_ID;
	
	//@Column(name="ConfigName",nullable = false)
	private String configName;

	public Config() {
		super();
	}

	public Config(int config_ID, String configName) {
		super();
		this.config_ID = config_ID;
		this.configName = configName;
	}

	public int getConfig_ID() {
		return config_ID;
	}

	public void setConfig_ID(int config_ID) {
		this.config_ID = config_ID;
	}

	public String getConfigName() {
		return configName;
	}

	public void setConfigName(String configName) {
		this.configName = configName;
	}
	
}
