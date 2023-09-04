package com.example.services;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.entities.Authentication;
import com.example.repositories.AuthenticationRepository;


@Service
public class AuthenticationManagerImpl implements AuthenticationManager {

	@Autowired
	private AuthenticationRepository auth_repo;
	
	public Optional<Authentication> getAuthentication(int Auth_id) {

		return auth_repo.findById(Auth_id);
	}

	@Override
	public void addAuthentication(Authentication auth) {
		auth_repo.save(auth);
		
	}

	@Override
	public Optional<Authentication> getbyusername(String uname) {
		// TODO Auto-generated method stub
		return auth_repo.getbyusername(uname);
	}


	

}
