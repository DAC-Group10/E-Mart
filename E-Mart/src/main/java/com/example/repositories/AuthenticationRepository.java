package com.example.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.entities.Authentication;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface AuthenticationRepository extends JpaRepository<Authentication, Integer>{

	@Query("FROM Authentication WHERE uname= :uname")
	Optional<Authentication> getbyusername(@Param("uname") String uname);

}
