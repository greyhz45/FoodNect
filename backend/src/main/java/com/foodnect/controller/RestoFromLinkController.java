package com.foodnect.controller;

import com.foodnect.entities.RestoFromLink;
import com.foodnect.services.RestoFromLinkServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/link")
public class RestoFromLinkController {

    @Autowired
    private RestoFromLinkServices restoFromLinkServices;

    @GetMapping("/search/{linkId}")
    public List<RestoFromLink> findAllRestosByLinkId(@PathVariable int linkId) {
        return restoFromLinkServices.findRestaurantByLinkId(linkId);
    }

    @GetMapping("/search/{linkId}/{id}")
    public RestoFromLink findRestoByLinkIdAndId(@PathVariable int linkId, @PathVariable int id) {
        return restoFromLinkServices.findRestaurantByLinkIdAndId(linkId, id);
    }

    @PutMapping("")
    public RestoFromLink updateResto(@RequestBody RestoFromLink restoFromLink) {
        return restoFromLinkServices.updateRestaurantFromLink(restoFromLink);
    }
}