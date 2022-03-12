package com.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.entities.LinkInvite;
import org.springframework.stereotype.Repository;

@Repository
public interface LinkInviteRepository extends JpaRepository<LinkInvite, Integer> {
    List<LinkInvite> findByLinkId(String linkId);

    LinkInvite save(LinkInvite linkInvite);
}
