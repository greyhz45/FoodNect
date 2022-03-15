package com.foodnect.services;

import com.foodnect.entities.RestoFromLink;
import com.foodnect.repository.RestoFromLinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestoFromLinkServices {
    @Autowired
    RestoFromLinkRepository restoFromLinkRepository;

    public List<RestoFromLink> findRestaurantByLinkId(int linkId) {
        return restoFromLinkRepository.findByLinkId(linkId);
    }

    public RestoFromLink findRestaurantByLinkIdAndId(int linkId, int id) {
        return restoFromLinkRepository.findByLinkIdAndId(linkId, id);
    }

    //is it save to db api?
    public RestoFromLink updateRestaurantFromLink(RestoFromLink restoFromLink) {

        List<RestoFromLink> sameLinkIdlist = findRestaurantByLinkId(restoFromLink.getLinkId());
        RestoFromLink newRestoFromLink = sameLinkIdlist.get(restoFromLink.getId());

        newRestoFromLink.setId(restoFromLink.getId());
        newRestoFromLink.setThumbsUp(restoFromLink.getThumbsUp());
        newRestoFromLink.setThumbsDown(restoFromLink.getThumbsDown());
        
        restoFromLinkRepository.save(newRestoFromLink);
        //if yes, where is save code?
        return newRestoFromLink;
    }
}
