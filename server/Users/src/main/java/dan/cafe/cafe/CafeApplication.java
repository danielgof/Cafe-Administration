package dan.cafe.cafe;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CafeApplication
{
	public static void main(String[] args) 
	{
		SpringApplication app = new SpringApplication(CafeApplication.class);
		app.setDefaultProperties(Collections
				.singletonMap("server.port", "8082"));
		app.run(args);
	}
}
