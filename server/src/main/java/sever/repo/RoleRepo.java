package sever.repo;

import sever.domain.AuthRole;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<AuthRole, Long> {
    AuthRole findByName(String name);
}
