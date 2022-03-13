package com.foodnect.services;

import com.foodnect.entities.Restaurant;
import com.foodnect.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantServices {
    @Autowired
    RestaurantRepository restaurantRepository;

    public List<Restaurant> findRestaurantsByZipCode(String zipCode) {
        return restaurantRepository.findByZipCode(zipCode);
    }

    public List<Restaurant> findRestaurantsByCity(String city) {
        return restaurantRepository.findByCity(city);
    }

    public List<Restaurant> findRestaurantsByZipCodeContaining(String zipCode) {
        return restaurantRepository.findByZipCodeContaining(zipCode);
    }

    public List<Restaurant> findRestaurantsByCityContaining(String city) {
        return restaurantRepository.findByCityContaining(city);
    }

    public List<Restaurant> findRestaurantsByCompleteAddressContaining(String completeAddress) {
        return restaurantRepository.findByCompleteAddressContaining(completeAddress);
    }

    public List<Restaurant> displayAll() {
        return restaurantRepository.findAll();
    }
}
