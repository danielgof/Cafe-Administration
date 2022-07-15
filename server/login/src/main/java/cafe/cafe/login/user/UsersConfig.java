package cafe.cafe.login.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;


@Configuration
public class UsersConfig
{
    @Bean
    CommandLineRunner commandLineRunner(UsersRepository repository)
    {
        return args ->
        {
            Users danzel = new Users(
                        "Danzel",
                        "1111",
                        "ddd@kkkkl");
            Users jared = new Users(
                    "Jared",
                    "qqq",
                    "kkkfk@llll");
            Users fred = new Users(
                    "Fred",
                    "3333",
                    "ririhg@lrjjfr");
            Users joui = new Users(
                    "Joui",
                    "fffff",
                    "fjjdhdh@lfkjf");

            repository.saveAll(
                    List.of(danzel, jared, fred, joui)
            );
        };
    }
}
