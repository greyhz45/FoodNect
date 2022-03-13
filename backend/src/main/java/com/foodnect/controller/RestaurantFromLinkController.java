package com.foodnect.controller;

import com.foodnect.entities.RestaurantFromLink;
import com.foodnect.services.RestoFromLinkServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") //allow react //@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/from-link")
public class RestaurantFromLinkController {

    @Autowired
    private RestoFromLinkServices restoFromLinkServices;

    @GetMapping("/search/{linkId}")
    public List<RestaurantFromLink> findRestaurantByLinkId(@PathVariable int linkId) {
        return restoFromLinkServices.findRestaurantByLinkId(linkId);
    }

    @GetMapping("/search/{linkId}/{id}")
    public RestaurantFromLink findRestaurantByLinkIdAndId(@PathVariable int linkId, @PathVariable int id) {
        return restoFromLinkServices.findRestaurantByLinkIdAndId(linkId, id);
    }

    @PutMapping("/update")
    public RestaurantFromLink updateRestaurantFromLink(@RequestBody RestaurantFromLink restaurantFromLink) {
        return restoFromLinkServices.updateRestaurantFromLink(restaurantFromLink);
    }
}