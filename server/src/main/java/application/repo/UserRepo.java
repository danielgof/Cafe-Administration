package application.repo;

import application.domain.ModelAuthUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<ModelAuthUser, Long> {
    ModelAuthUser findByUsername(String username);

}
