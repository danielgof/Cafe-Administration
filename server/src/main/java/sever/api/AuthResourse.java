package sever.api;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;
import sever.domain.AuthRole;
import sever.domain.AuthUser;
import sever.service.UserService;

import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthResourse {
    
    private final UserService userService;

//    login api
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody AuthUser authUser) {
        log.info(authUser.getUsername());
//        Map<String, Object> claims = new HashMap<>();
        Set<String> Userroles = new HashSet<>();
        AuthUser user = userService.getUser(authUser.getUsername());
//        for(AuthRole role:user.getRoles()){
//            Userroles.add(role.getName());
//        }
//        claims.put("Roles", Userroles.toArray());
//        System.out.println(claims);
        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
        String access_token = JWT.create()
                .withSubject(authUser.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 10*60*1000))
//                .withClaim("roles", authUser.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .withClaim("roles", Arrays.asList(Userroles.toArray()))
                .sign(algorithm);
        String refresh_token = JWT.create()
                .withSubject(authUser.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 30*60*1000))
                .withClaim("roles", Arrays.asList(Userroles.toArray()))
                .sign(algorithm);
        Map<String,String> tokens = new HashMap<>();
        tokens.put("access_token",access_token);
        tokens.put("refresh_token",refresh_token);
        return ResponseEntity.ok().body(tokens);
    }

    @PostMapping("/save_waiter")
    public ResponseEntity registerWaiter(@RequestBody AuthUser authUser) {
        userService.saveUser(authUser);
        userService.addRoleToUser(authUser.getUsername(), "ROLE_WAITER");
        log.info("пользователь с именем {} был добавлен в базу данных", authUser.getUsername());
        return ResponseEntity.ok().body(authUser);
    }

    @PostMapping("/save_manager")
    public ResponseEntity registerManager(@RequestBody AuthUser authUser) {
        userService.saveUser(authUser);
        userService.addRoleToUser(authUser.getUsername(), "ROLE_MANAGER");
        log.info("пользователь с именем {} был добавлен в базу данных", authUser.getUsername());
        return ResponseEntity.ok().body(authUser);
    }
}