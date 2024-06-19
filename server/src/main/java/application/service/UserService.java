package application.service;

import application.domain.ModelAuthRole;
import application.domain.ModelAuthUser;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface UserService<ModelAuthUser> {

    @Transactional
    ModelAuthUser saveUser(ModelAuthUser user);

    @Transactional
    application.domain.ModelAuthUser saveUser(application.domain.ModelAuthUser user);

    @Transactional
    ModelAuthRole saveRole(ModelAuthRole role);

    void addRoleToUser(String username, String rolename);
    ModelAuthUser getUser(String username);
    List<ModelAuthUser> getUsers();
}
