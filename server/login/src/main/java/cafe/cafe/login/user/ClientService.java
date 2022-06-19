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

    public List<Client> getClients()
    {
        return clientRepository.findAll();
    }

    public void addNewClient(Client student){

        Optional<Client> studentOptional = clientRepository
                .findStudentByLastname(student.getPassword());
        if (studentOptional.isPresent())
        {
            throw new IllegalStateException("email taken");
        }
        clientRepository.save(student);
    }

    public void deleteClient(Long studentId) {

        boolean exists = clientRepository.existsById(studentId);
        if (!exists)
        {
            throw new IllegalStateException("student with id " +
                    studentId + " does not exists");
        }
        clientRepository.deleteById(studentId);
    }

    @Transactional
    public void updateClient(Long studentId, String name) {
        Client student = clientRepository.findById(studentId)
                .orElseThrow(() -> new IllegalStateException("student with id " + studentId + " does not exists"));

        if (name != null && name.length() > 0 && !Objects.equals(student.getLogin(), name))
        {
            student.setLogin(name);
        }

        if (name != null && name.length() > 0 && !Objects.equals(student.getLogin(), name))
        {
            Optional<Client> studentOptional = clientRepository
                    .findStudentByLastname(student.getPassword());
            if (studentOptional.isPresent())
            {
                throw new IllegalStateException("email taken");
            }
            student.setPassword(name);
        }
    }
}
