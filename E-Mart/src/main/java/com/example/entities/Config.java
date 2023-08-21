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
	@Column(name="ConfigID")
	private int configID;
	
	@Column(name="ConfigName",nullable = false)
	private String configName;

	public Config() {
		super();
	}

	public Config( String configName) {
		super();
		this.configName = configName;
	}

	public int getConfigID() {
		return configID;
	}

	public void setConfigID(int configID) {
		this.configID = configID;
	}

	public String getConfigName() {
		return configName;
	}

	public void setConfigName(String configName) {
		this.configName = configName;
	}

	@Override
	public String toString() {
		return "Config [configID=" + configID + ", configName=" + configName + "]";
	}
	
	
	
}
