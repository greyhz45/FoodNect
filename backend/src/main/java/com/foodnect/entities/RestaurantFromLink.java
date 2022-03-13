package com.foodnect.entities;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name="voting_tbl")
public class RestaurantFromLink {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name="id")
    private int testId;

    private int linkId; //link_tbl id
    private int id; //restaurant_tbl id
    private int thumbsUp;
    private int thumbsDown;

    @ManyToOne
    @JoinColumn(name = "id", insertable = false, updatable = false)
    Restaurant restaurant;

    @ManyToOne
    @JoinColumn(name = "linkId", insertable = false, updatable = false)
    LinkInvite linkInvite;


}
