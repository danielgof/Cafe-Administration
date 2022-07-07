package cafe.cafe.login.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService
{
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository UserRepository) {
        this.userRepository = UserRepository;
    }

    public List<Users> getUsers()
    {
        return userRepository.findAll();
    }

    public void addNewUser(Users user)
    {
        Optional<Users> userOptional = userRepository.findUserByLogin(user.getPassword());
        if (userOptional.isPresent())
        {
            throw new IllegalStateException("email taken");
        }
        userRepository.save(user);
    }

    public void deleteUser(Long userId) {

        boolean exists = userRepository.existsById(userId);
        if (!exists)
        {
            throw new IllegalStateException("user with id " +
                    userId + " does not exists");
        }
        userRepository.deleteById(userId);
    }

    @Transactional
    public void updateUser(Long userId, String Login) {
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalStateException("user with id " + userId + " does not exists"));

        if (Login != null && Login.length() > 0 && !Objects.equals(user.getLogin(), Login))
        {
            user.setLogin(Login);
        }

        if (Login != null && Login.length() > 0 && !Objects.equals(user.getLogin(), Login))
        {
            Optional<Users> userOptional = userRepository
                    .findUserByLogin(user.getLogin());
            if (userOptional.isPresent())
            {
                throw new IllegalStateException("login taken");
            }
            user.setPassword(Login);
        }
    }
}
