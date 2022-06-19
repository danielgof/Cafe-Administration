package cafe.cafe.login.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ClientService
{
    private final ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository ClientRepository) {
        this.clientRepository = ClientRepository;
    }

    public List<Client> getUsers()
    {
        return clientRepository.findAll();
    }

    public void addNewUser(Client user)
    {
        Optional<Client> userOptional = clientRepository.findUserByLogin(user.getPassword());
        if (userOptional.isPresent())
        {
            throw new IllegalStateException("email taken");
        }
        clientRepository.save(user);
    }

    public void deleteUser(Long userId) {

        boolean exists = clientRepository.existsById(userId);
        if (!exists)
        {
            throw new IllegalStateException("student with id " +
                    userId + " does not exists");
        }
        clientRepository.deleteById(userId);
    }

    @Transactional
    public void updateUser(Long userId, String Login) {
        Client user = clientRepository.findById(userId)
                .orElseThrow(() -> new IllegalStateException("user with id " + userId + " does not exists"));

        if (Login != null && Login.length() > 0 && !Objects.equals(user.getLogin(), Login))
        {
            user.setLogin(Login);
        }

        if (Login != null && Login.length() > 0 && !Objects.equals(user.getLogin(), Login))
        {
            Optional<Client> userOptional = clientRepository
                    .findUserByLogin(user.getLogin());
            if (userOptional.isPresent())
            {
                throw new IllegalStateException("login taken");
            }
            user.setPassword(Login);
        }
    }
}
