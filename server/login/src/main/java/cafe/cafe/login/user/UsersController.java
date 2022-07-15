package cafe.cafe.login.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping()
public class UsersController
{
    private final UserService userService;

    @Autowired
    public UsersController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<Users> getUsers() {
        return userService.getUsers();
    }

//    @PostMapping("/login")
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Map<String, String> checkData(@RequestBody Map<String, Object> data)
    {
        String Login = (String) data.get("login");
        String Password = (String) data.get("login");
        return userService.Login(Login, Password);
    }

    @PostMapping("/register")
    public void registerNewUser(@RequestBody Users user) {
        userService.addNewUser(user);
    }

    @DeleteMapping(path = "{userId}")
    public void deleteUser(@PathVariable("userId") Long userId) {
        userService.deleteUser(userId);
    }

    @PutMapping(path = "{userId}")
    public void updateUser(
            @PathVariable("userId") Long userId,
            @RequestParam(required = false) String Login)
    {
        userService.updateUser(userId, Login);
    }
}
