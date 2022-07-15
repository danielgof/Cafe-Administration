package cafe.cafe.login.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UsersRepository extends JpaRepository<Users, Long>
{
    @Query("SELECT s.login FROM Users s WHERE s.login =?1")
    String findUsersByLogin(String Login);

    @Query("SELECT s.password FROM Users s WHERE s.password =?1")
    String findUsersByPassword(String Password);

    @Query("SELECT s FROM Users s WHERE s.id =?1")
    Optional<Users> findUsersById(Long id);
}
