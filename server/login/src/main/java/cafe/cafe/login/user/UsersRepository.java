package cafe.cafe.login.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<Users, Long>
{
    @Query("SELECT s FROM Users s WHERE s.password =?1")
    Optional<Users> findUserByLogin(String Login);
}
