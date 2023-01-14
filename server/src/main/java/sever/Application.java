package sever;

import sever.domain.*;
import sever.service.*;
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
    CommandLineRunner run(UserService userService,
                          FoodService foodService,
                          OrderService orderService,
                          EmployeeService employeeService,
                          PositionService positionService
    ) {
        return args -> {
            userService.saveRole(new ModelAuthRole("ROLE_ADMIN"));
            userService.saveRole(new ModelAuthRole("ROLE_WAITER"));
            userService.saveRole(new ModelAuthRole("ROLE_MANAGER"));

            userService.saveUser(new ModelAuthUser("John", "Falckon", "02.03.1977", "john3", "1234", new ArrayList<>()));
            userService.saveUser(new ModelAuthUser("David","Buzzle", "09.12.1989",  "dv44", "1234", new ArrayList<>()));
            userService.saveUser(new ModelAuthUser("Ross", "Geller", "04.08.1970", "user", "1234", new ArrayList<>()));
            userService.saveUser(new ModelAuthUser("Chandler", "Bing", "07.09.1970", "chb", "1234", new ArrayList<>()));

            userService.addRoleToUser("john3", "ROLE_WAITER");
            userService.addRoleToUser("dv44", "ROLE_WAITER");
            userService.addRoleToUser("user", "ROLE_WAITER");
            userService.addRoleToUser("chb", "ROLE_ADMIN");
            userService.addRoleToUser("chb", "ROLE_WAITER");

//            drinks
            foodService.saveFood(new ModelFood("drink", "cola"));
            foodService.saveFood(new ModelFood("drink", "pepsi"));
            foodService.saveFood(new ModelFood("drink", "black tea"));
            foodService.saveFood(new ModelFood("drink", "green tea"));
            foodService.saveFood(new ModelFood("drink", "beer"));
            foodService.saveFood(new ModelFood("drink", "hot chocolate"));
//            desserts
            foodService.saveFood(new ModelFood("dessert", "meringue"));
            foodService.saveFood(new ModelFood("dessert", "chocolate cake"));
            foodService.saveFood(new ModelFood("dessert", "chert cake"));
            foodService.saveFood(new ModelFood("dessert", "chocolate candy"));
//            salads
            foodService.saveFood(new ModelFood("salad", "cesar"));
            foodService.saveFood(new ModelFood("salad", "som tam"));
            foodService.saveFood(new ModelFood("salad", "caprese"));
            foodService.saveFood(new ModelFood("salad", "olivier"));
            foodService.saveFood(new ModelFood("salad", "fattoush"));
            foodService.saveFood(new ModelFood("salad", "kisir"));
////            seafood
//            foodService.saveFood(new ModelFood("seafood", "baked trout"));
//            foodService.saveFood(new ModelFood("seafood", "fish and chips"));
//            foodService.saveFood(new ModelFood("seafood", "sashimi"));
//            foodService.saveFood(new ModelFood("seafood", "bisque"));
//            foodService.saveFood(new ModelFood("seafood", "nigiri"));
//            foodService.saveFood(new ModelFood("seafood", "crab cake"));
//            foodService.saveFood(new ModelFood("seafood", "tendon"));
//            foodService.saveFood(new ModelFood("seafood", "ceviche"));
//            starters
            foodService.saveFood(new ModelFood("starter", "shrimps with cheese"));
            foodService.saveFood(new ModelFood("starter", "namas"));
            foodService.saveFood(new ModelFood("starter", "cheese plate"));
            foodService.saveFood(new ModelFood("starter", "backed spring trols"));
//            steaks
            foodService.saveFood(new ModelFood("steak", "beef steak"));
            foodService.saveFood(new ModelFood("steak", "ribeye steak"));
            foodService.saveFood(new ModelFood("steak", "strip steak"));

            orderService.saveOrder(new ModelOrder("saaaaaaa", "aaaa", "aaaa"));

            employeeService.saveEmployee(new ModelEmployee("Jack", "Barker", "02.09.1999",  new ArrayList<>()));
            employeeService.saveEmployee(new ModelEmployee("Daniel", "Hofman", "01.03.2001", new ArrayList<>()));
            employeeService.saveEmployee(new ModelEmployee("Grey", "Katie", "10.09.1979", new ArrayList<>()));
            employeeService.saveEmployee(new ModelEmployee("Grey", "Josh", "01.03.2000", new ArrayList<>()));
            employeeService.saveEmployee(new ModelEmployee("Jack", "Mind", "09.09.1987", new ArrayList<>()));
            employeeService.saveEmployee(new ModelEmployee("Daniel", "Bucci", "01.03.2002", new ArrayList<>()));
            employeeService.saveEmployee(new ModelEmployee("Jack", "Lower", "02.09.1990", new ArrayList<>()));
            employeeService.saveEmployee(new ModelEmployee("Daniel", "Jacob", "09.03.2003",  new ArrayList<>()));

            positionService.savePosition(new ModelPosition("Cloud Storage", "SE"));
            employeeService.addPositionToEmployee(1l, 1L);
        };
    }
}
