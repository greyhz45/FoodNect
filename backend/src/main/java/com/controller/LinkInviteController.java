package com.controller;

import com.entities.LinkInvite;
import com.repository.LinkInviteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/foodnect/linkinvite")
@PreAuthorize("isAuthenticated()")
public class LinkInviteController {

    @Autowired
    private LinkInviteRepository linkInviteRepository;

    @GetMapping("/search/{linkId}")
    public List<LinkInvite> findLinkInviteByLinkId(@PathVariable String linkId) {
        return linkInviteRepository.findByLinkId(linkId);
    }
}