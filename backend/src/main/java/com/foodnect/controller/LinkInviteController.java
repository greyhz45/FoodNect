package com.foodnect.controller;

import com.foodnect.entities.LinkInvite;
import com.foodnect.services.LinkInviteServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") //allow react //@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/link-nvite")
public class LinkInviteController {

    @Autowired
    private LinkInviteServices linkInviteServices;

    @GetMapping("/search/{linkId}")
    public List<LinkInvite> findLinkInviteByLinkId(@PathVariable String linkId) {
        return linkInviteServices.findLinkInviteByLinkId(linkId);
    }

    @PostMapping("/new")
    public LinkInvite saveLinkInvite(@RequestBody LinkInvite linkInvite) {
        return linkInviteServices.saveLinkInvite(linkInvite);
    }
}