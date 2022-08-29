package cafe.cafe.login.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping
public class UsersController
{
    private final UserService userService;

    @Autowired
    public UsersController(UserService userService)
    {
        this.userService = userService;
    }

    @GetMapping("/api/users")
    public List<Users> getUsers()
    {
        return userService.getUsers();
    }

    @RequestMapping(value = "/api/users/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity checkData(@RequestBody Map<String, Object> data)
    {
        String Login = (String) data.get("login");
        String Password = (String) data.get("password");
//        System.out.println(userService.Login(Login, Password));
        if (!userService.Login(Login, Password)) return new ResponseEntity(HttpStatus.BAD_REQUEST);
        else return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/api/users/new")
    @ResponseBody
    public ResponseEntity registerNewUser(@RequestBody Users user)
    {
        if (!userService.registerUser(user)) return new ResponseEntity(HttpStatus.BAD_REQUEST);
        else return new ResponseEntity(HttpStatus.CREATED);

    }

    @DeleteMapping(path = "/api/users/{userId}")
    public ResponseEntity deleteUser(@PathVariable("userId") Long userId)
    {
        userService.deleteUser(userId);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping(path = "/api/users/{userId}")
    public ResponseEntity updateUser(
            @PathVariable("userId") Long userId,
            @RequestParam(required = false) String Login)
    {
        userService.updateUser(userId, Login);
        return new ResponseEntity(HttpStatus.OK);
    }
}
