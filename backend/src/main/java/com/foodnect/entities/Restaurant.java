package com.foodnect.entities;

import lombok.Data;
import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@Table(name="restaurant_tbl")

public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name="id")
    private int id;
    private String restaurantName;
    private String restaurantType;
    private String completeAddress;
    private String zipCode;
    private String city;
    private String imagePath;
    private String telephoneNumber;
    private Boolean isVegan;
    private String description;
    private String openFrom;
    private String openTo;

    @OneToMany
    @JoinColumn(name = "id")
    private Set<RestaurantFromLink> restoFromLinkSet;

}