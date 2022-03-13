package com.foodnect.services;

import com.foodnect.entities.RestaurantFromLink;
import com.foodnect.repository.RestoFromLinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestoFromLinkServices {
    @Autowired
    RestoFromLinkRepository restoFromLinkRepository;

    public List<RestaurantFromLink> findRestaurantByLinkId(int linkId) {
        return restoFromLinkRepository.findByLinkId(linkId);
    }

    public RestaurantFromLink findRestaurantByLinkIdAndId(int linkId, int id) {
        return restoFromLinkRepository.findByLinkIdAndId(linkId, id);
    }

    //is it save to db api?
    public RestaurantFromLink updateRestaurantFromLink(RestaurantFromLink restoFromLink) {

        List<RestaurantFromLink> sameLinkIdlist = findRestaurantByLinkId(restoFromLink.getLinkId());
        RestaurantFromLink newRestoFromLink = sameLinkIdlist.get(restoFromLink.getId());

        newRestoFromLink.setId(restoFromLink.getId());
        newRestoFromLink.setThumbsUp(restoFromLink.getThumbsUp());
        newRestoFromLink.setThumbsDown(restoFromLink.getThumbsDown());

        //if yes, where is save code?
        return newRestoFromLink;
    }
}
