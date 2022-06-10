package com.example.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/login")
public class UserController
{
    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public User save(@RequestBody User user)
    {
        return userRepository.save(user);
    }

    @GetMapping
    public List<User> getAllUsers()
    {
        return userRepository.findAll();
    }

    @GetMapping("/{Login}")
    public User findUser(@PathVariable String Login)
    {
        return userRepository.findUserByLogin(Login);
    }

    @DeleteMapping("/{Login}")
    public String removeUser(@PathVariable String Login)
    {
        return userRepository.deleteUserByLogin(Login);
    }
}
