package com.jwt.service;

import com.jwt.domain.AuthUser;
import com.jwt.domain.AuthRole;


import java.util.List;

public interface UserService {
    AuthUser saveUser(AuthUser user);
    AuthRole saveRole(AuthRole role);
    void addRoleToUser(String username, String rolename);
    AuthUser getUser(String username);
    List<AuthUser> getUsers();
}
