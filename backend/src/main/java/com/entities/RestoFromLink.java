package com.entities;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Entity
@Table(name="voting_tbl")
public class RestoFromLink {

    @ManyToOne
    @JoinColumn(name = "id")
    Restaurant restaurant;

    @ManyToOne
    @JoinColumn(name = "linkId")
    LinkInvite linkInvite;

    private int linkId; //link_tbl id
    private int id; //restaurant_tbl id
    private int thumbsUp;
    private int thumbsDown;

}
