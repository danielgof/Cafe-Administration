package sever.service;

import sever.domain.ModelAuthRole;
import sever.domain.ModelAuthUser;
import sever.repo.RoleRepo;
import sever.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService {

    private final UserRepo userRepo;
    private final RoleRepo roleRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public ModelAuthUser saveUser(ModelAuthUser user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    @Override
    @Transactional
    public ModelAuthRole saveRole(ModelAuthRole role) {
        return roleRepo.save(role);
    }

    @Override
    @Transactional
    public void addRoleToUser(String username, String rolename) {
        ModelAuthUser user = userRepo.findByUsername(username);
        ModelAuthRole role = roleRepo.findByName(rolename);
        user.getRoles().add(role);
    }

    @Override
    public ModelAuthUser getUser(String username) {
        return userRepo.findByUsername(username);
    }

    @Override
    public List<ModelAuthUser> getUsers() {
        return userRepo.findAll();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        ModelAuthUser user = userRepo.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found in database");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(authRole -> {
            authorities.add(new SimpleGrantedAuthority(authRole.getName()));
        });
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }
}
