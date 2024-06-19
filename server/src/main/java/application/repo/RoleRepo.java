package application.repo;


import application.domain.ModelAuthRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<ModelAuthRole, Long> {
    ModelAuthRole findByName(String name);
}
