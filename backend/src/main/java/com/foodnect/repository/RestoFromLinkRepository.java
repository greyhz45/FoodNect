package com.foodnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.foodnect.entities.RestaurantFromLink;
import org.springframework.stereotype.Repository;

@Repository
public interface RestoFromLinkRepository extends JpaRepository<RestaurantFromLink, Integer> {
    List<RestaurantFromLink> findByLinkId(int linkId);

    RestaurantFromLink findByLinkIdAndId(int linkId, int id);
}
