package cafe.cafe.login.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;


@Configuration
public class UserConfig
{
    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository)
    {
        return args ->
        {
            Users danzel = new Users(
                        "Danzel",
                        "Green",
                        "ddd@kkkkl");
            Users jared = new Users(
                    "Jared",
                    "Book",
                    "kkkfk@llll");
            Users fred = new Users(
                    "Fred",
                    "Geller",
                    "ririhg@lrjjfr");
            Users joui = new Users(
                    "Joui",
                    "Tribianny",
                    "fjjdhdh@lfkjf");

            repository.saveAll(
                    List.of(danzel, jared, fred, joui)
            );
        };
    }
}
