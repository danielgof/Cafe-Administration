package cafe.cafe.login.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "login")
public class UserController
{
    private final ClientService userService;

    @Autowired
    public UserController(ClientService clientService) {
        this.userService = clientService;
    }


    @GetMapping
    public List<Client> getUsers() {
        return userService.getUsers();
    }


    @PostMapping
    public void registerNewCLient(@RequestBody Client student) {
        userService.addNewClient(student);
    }

    @DeleteMapping(path = "{clientId}")
    public void deleteClient(@PathVariable("clientId") Long studentId) {
        userService.deleteClient(studentId);
    }

    @PutMapping(path = "{clientId}")
    public void updateStudent(
            @PathVariable("clientId") Long studentId,
            @RequestParam(required = false) String name)
    {
        userService.updateClient(studentId, name);
    }
}
