package com.example.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository
{
    public static final String HASH_KEY = "User";



    private RedisTemplate template;


    public UserRepository(RedisTemplate template) {
        this.template = template;
    }

    public User save(User user)
    {
        template.opsForHash().put(HASH_KEY, user.getLogin(), user);
        return user;
    }

    public List<User> findAll()
    {
        return template.opsForHash().values(HASH_KEY);
    }

    public User findUserByLogin(String Login)
    {
        return (User) template.opsForHash().get(HASH_KEY, Login);
    }

    public String deleteUserByLogin(String Login)
    {
        template.opsForHash().delete(HASH_KEY, Login);
        return "User removed";
    }
}
