package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.entities.Authentication;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface AuthenticationRepository extends JpaRepository<Authentication, Integer>{

}
