package com.controller;

import com.entities.Restaurant;
import com.repository.RestaurantRepository;
import com.services.RestaurantServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/foodnect/restaurants")
public class RestaurantController {

    @Autowired
    RestaurantServices restaurantServices;

    @GetMapping("/search/z/{zipCode}")
    public List<Restaurant> findRestaurantsByZipCode(@PathVariable String zipCode) {
        return restaurantServices.findRestaurantsByZipCode(zipCode);
    }

    @GetMapping("/search/c/{city}")
    public List<Restaurant> findRestaurantsByCity(@PathVariable String city) {
        return restaurantServices.findRestaurantsByCity(city);
    }

    @GetMapping("/search/uz/{zipCode}")
    public List<Restaurant> findRestaurantsByZipCodeInAddress(@PathVariable String zipCode) {
        return restaurantServices.findRestaurantsByZipCodeContaining(zipCode);
    }

    @GetMapping("/search/uc/{city}")
    public List<Restaurant> findRestaurantsByCityInAddress(@PathVariable String city) {
        return restaurantServices.findRestaurantsByCityContaining(city);
    }

    @GetMapping("/search")
    public List<Restaurant> findRestaurantsByCompleteAddress(@RequestParam String completeAddress) {
        return restaurantServices.findRestaurantsByCompleteAddressContaining(completeAddress);
    }

    @GetMapping("/all")
    public List<Restaurant> displayAll() {
        return restaurantServices.displayAll();
    }
}
