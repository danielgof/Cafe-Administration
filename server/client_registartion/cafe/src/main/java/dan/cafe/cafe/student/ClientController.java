package dan.cafe.cafe.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/client")
public class ClientController
{
    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }


    @GetMapping
    public List<Client> getClinets() {
        return clientService.getClients();
    }


    @PostMapping
    public void registerNewCLient(@RequestBody Client student) {
        clientService.addNewClient(student);
    }

    @DeleteMapping(path = "{clientId}")
    public void deleteClient(@PathVariable("clientId") Long studentId) {
        clientService.deleteClient(studentId);
    }

    @PutMapping(path = "{clientId}")
    public void updateStudent(
            @PathVariable("clientId") Long studentId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String phonenumber)
    {
        clientService.updateClient(studentId, name, email, phonenumber);
    }
}
