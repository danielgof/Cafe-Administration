package com.example.auth_spring.registrstion;

import org.springframework.stereotype.Service;

@Service
public class RegistrationService
{
    public String register(RegistrationRequest request)
    {
        return "works!";
    }
}
