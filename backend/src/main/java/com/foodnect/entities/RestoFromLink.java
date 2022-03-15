package com.foodnect.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Data
@Entity
@Table(name="voting_tbl")
public class RestoFromLink {

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

    public int getTestId() {
        return testId;
    }

    public void setTestId(int testId) {
        this.testId = testId;
    }

    public int getLinkId() {
        return linkId;
    }

    public void setLinkId(int linkId) {
        this.linkId = linkId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getThumbsUp() {
        return thumbsUp;
    }

    public void setThumbsUp(int thumbsUp) {
        this.thumbsUp = thumbsUp;
    }

    public int getThumbsDown() {
        return thumbsDown;
    }

    public void setThumbsDown(int thumbsDown) {
        this.thumbsDown = thumbsDown;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public LinkInvite getLinkInvite() {
        return linkInvite;
    }

    public void setLinkInvite(LinkInvite linkInvite) {
        this.linkInvite = linkInvite;
    }
}
