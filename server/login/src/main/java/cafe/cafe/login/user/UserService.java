package cafe.cafe.login.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
public class UserService
{
    private final UsersRepository userRepository;

    @Autowired
    public UserService(UsersRepository UserRepository) {
        this.userRepository = UserRepository;
    }

    public List<Users> getUsers()
    {
        return userRepository.findAll();
    }

    public void addNewUser(Users user)
    {
        Optional<Users> userOptional = userRepository.findUsersById(user.getId());
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

    public Map<String, String> Login(String Login, String Password) {
        String existsLogin = userRepository.findUsersByLogin(Login);
        String existsPass = userRepository.findUsersByPassword(Password);
        Map<String, String> data;
        if (Objects.equals(existsLogin, Login) && Objects.equals(existsPass, Password))
        {
            data = new HashMap();
            data.put("status", "200");
            return data;
        }

        data = new HashMap();
        data.put("status", "400");
        return data;

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
                    .findUsersById(user.getId());
            if (userOptional.isPresent())
            {
                throw new IllegalStateException("login taken");
            }
            user.setPassword(Login);
        }
    }
}
