package dan.cafe.cafe.student;

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
                        "Green",
                        "123dz@gmail.com",
                        LocalDate.of(1999, 02, 7),
                    "0892929832");
            Client jared = new Client(
                    "Jared",
                    "Book",
                    "jr@gmail.com",
                    LocalDate.of(1996, 02, 7),
                    "8273446276");

            repository.saveAll(
                    List.of(danzel, jared)
            );
        };
    }
}
