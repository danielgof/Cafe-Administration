package cafe.cafe.login.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.time.LocalDate;
import java.util.List;


@Configuration
public class ClientConfig
{
    @Bean
    CommandLineRunner commandLineRunner(ClientRepository repository)
    {
        return args ->
        {
            Client danzel = new Client(
                        "Danzel",
                        "Green");
            Client jared = new Client(
                    "Jared",
                    "Book");
            Client fred = new Client(
                    "Fred",
                    "Geller");
            Client joui = new Client(
                    "Joui",
                    "Tribianny");

            repository.saveAll(
                    List.of(danzel, jared, fred, joui)
            );
        };
    }
}
