package com.exam.examserver.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exam.examserver.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);
  
     //org.apache.catalina.User findByUsername(String username);
    
    boolean existsByUsername(String username);

}
