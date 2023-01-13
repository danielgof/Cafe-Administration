package sever.service;

import sever.domain.ModelAuthUser;
import sever.domain.ModelAuthRole;


import java.util.List;

public interface UserService {
    ModelAuthUser saveUser(ModelAuthUser user);
    ModelAuthRole saveRole(ModelAuthRole role);
    void addRoleToUser(String username, String rolename);
    ModelAuthUser getUser(String username);
    List<ModelAuthUser> getUsers();
}
