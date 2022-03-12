package com.entities;

import lombok.*;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalTime;
import java.util.Set;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="restaurant_tbl")

public class Restaurant {

    @OneToMany
    @JoinColumn(name = "id")
    private Set<RestoFromLink> restoFromLinkSet;

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
    private String telnum;
    private Boolean isVegan;
    private String description;
    private LocalTime openFrom;
    private LocalTime openTo;
}