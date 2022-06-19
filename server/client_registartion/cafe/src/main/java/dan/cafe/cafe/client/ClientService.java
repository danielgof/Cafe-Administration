package dan.cafe.cafe.client;


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

    public void addNewClient(Client user){

        Optional<Client> studentOptional = clientRepository
                .findStudentByEmail(user.getEmail());
        if (studentOptional.isPresent())
        {
            throw new IllegalStateException("email taken");
        }
        clientRepository.save(user);
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
    public void updateClient(Long studentId, String name, String email, String phonenumber) {
        Client student = clientRepository.findById(studentId)
                .orElseThrow(() -> new IllegalStateException("student with id " + studentId + " does not exists"));

        if (name != null && name.length() > 0 && !Objects.equals(student.getName(), name))
        {
            student.setName(name);
        }

        if (email != null && email.length() > 0 && !Objects.equals(student.getName(), email))
        {
            Optional<Client> studentOptional = clientRepository
                    .findStudentByEmail(student.getEmail());
            if (studentOptional.isPresent())
            {
                throw new IllegalStateException("email taken");
            }
            student.setEmail(email);
        }
    }
}
