package sever;

import sever.domain.AuthRole;
import sever.domain.AuthUser;
import sever.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    CommandLineRunner run(UserService userService) {
        return args -> {
            userService.saveRole(new AuthRole("ROLE_ADMIN"));
            userService.saveRole(new AuthRole("ROLE_WAITER"));
            userService.saveRole(new AuthRole("ROLE_MANAGER"));

            userService.saveUser(new AuthUser("John", "Falckon", "02.03.1977", "john3", "1234", new ArrayList<>()));
            userService.saveUser(new AuthUser("David","Buzzle", "09.12.1989",  "dv44", "1234",new ArrayList<>()));
            userService.saveUser(new AuthUser("Ross", "Geller", "04.08.1970", "user", "1234", new ArrayList<>()));
            userService.saveUser(new AuthUser("Chandler", "Bing", "07.09.1970", "chb", "1234",new ArrayList<>()));

            userService.addRoleToUser("john3", "ROLE_WAITER");
            userService.addRoleToUser("dv44", "ROLE_WAITER");
            userService.addRoleToUser("user", "ROLE_WAITER");
            userService.addRoleToUser("chb", "ROLE_ADMIN");
            userService.addRoleToUser("chb", "ROLE_WAITER");
        };
    }
}
