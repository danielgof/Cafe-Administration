package sever.service;

import sever.domain.AuthUser;
import sever.domain.AuthRole;


import java.util.List;

public interface UserService {
    AuthUser saveUser(AuthUser user);
    AuthRole saveRole(AuthRole role);
    void addRoleToUser(String username, String rolename);
    AuthUser getUser(String username);
    List<AuthUser> getUsers();
}
