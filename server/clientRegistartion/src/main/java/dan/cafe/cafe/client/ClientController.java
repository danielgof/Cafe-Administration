package dan.cafe.cafe.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "api/client")
public class ClientController
{
    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public List<Client> getClinets()
    {
        return clientService.getClients();
    }


    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity registerNewCLient(@RequestBody Client client) {
        if (client.getName() == null || client.getLastname() == null || client.getPhonenumber() == null || client.getEmail() == null || client.getDob() == null )
        {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        else
            clientService.addNewClient(client);
            return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping(path = "{clientId}")
    public void deleteClient(@PathVariable("clientId") Long clientId)
    {
        clientService.deleteClient(clientId);
    }

    @PutMapping(path = "{clientId}")
    public void updateStudent(
            @PathVariable("clientId") Long clientId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String phonenumber)
    {
        clientService.updateClient(clientId, name, email, phonenumber);
    }
}
