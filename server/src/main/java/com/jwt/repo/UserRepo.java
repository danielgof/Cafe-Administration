package com.jwt.repo;

import com.jwt.domain.AuthUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<AuthUser, Long> {
    AuthUser findByUsername(String username);
}
