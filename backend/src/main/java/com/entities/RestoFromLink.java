package com.entities;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="voting_tbl")
public class RestoFromLink {
    
    private int linkId; //link_tbl id
    private int id; //restaurant_tbl id
    private int thumbsUp;
    private int thumbsDown;
}
