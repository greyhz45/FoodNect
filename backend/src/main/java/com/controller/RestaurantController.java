package com.controller;

import com.entities.Restaurant;
import com.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/foodnect/restaurants")
@PreAuthorize("isAuthenticated()")
public class RestaurantController {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @GetMapping("/search/{zipCode}")
    public List<Restaurant> findRestaurantsByZipCode(@PathVariable String zipCode) {
        return restaurantRepository.findByZipCode(zipCode);
    }

    @GetMapping("/search/{city}")
    public List<Restaurant> findRestaurantsByCity(@PathVariable String city) {
        return restaurantRepository.findByCity(city);
    }

    @GetMapping("/search/u/{zipCode}")
    public List<Restaurant> findRestaurantsByZipCodeInAddress(@PathVariable String zipCode) {
        return restaurantRepository.findByZipCodeContaining(zipCode);
    }

    @GetMapping("/search/u/{city}")
    public List<Restaurant> findRestaurantsByCityInAddress(@PathVariable String city) {
        return restaurantRepository.findByCityContaining(city);
    }
}
