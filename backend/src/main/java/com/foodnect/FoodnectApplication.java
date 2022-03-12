package com.foodnect;

import com.entities.Restaurant;
import com.repository.LinkInviteRepository;
import com.repository.RestaurantRepository;
import com.repository.RestoFromLinkRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;


//@SpringBootApplication(scanBasePackages = {"boot.registration"}, exclude = JpaRepositoriesAutoConfiguration.class)
@EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class})
@SpringBootApplication
public class FoodnectApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodnectApplication.class, args);
	}

//	@Bean
//	CommandLineRunner commandLineRunner(RestaurantRepository restaurantRepository) {
//		return args -> {
//			Restaurant resto1 = new Restaurant(
//					1, "resto1",
//					"Fast Food", "1224 Main St., Va. 24134",
//					"24134", "Pearisburg", "/images/not-found-404.svg",
//					"2172746823", false, "new resto in our block",
//					343, 54546
//			);
//			restaurantRepository.save(resto1);
//		};
//	}

}
