package com.foodnect.entities;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Data
@Entity
@Table(name="link_tbl")
public class LinkInvite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name="id")
    private int linkId;
    private String sender;
    private String recipient;
    private LocalDate expirationDate;
    private String link;

    @OneToMany
    @JoinColumn(name = "linkId")
    private Set<RestaurantFromLink> restaurantFromLinkSet;
}
