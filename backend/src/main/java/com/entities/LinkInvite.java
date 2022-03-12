package com.entities;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="link_tbl")
public class LinkInvite {

    @OneToMany
    @JoinColumn(name = "linkId")
    private Set<RestoFromLink> restoFromLinkSet;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name="id")
    private int linkId;
    private String sender;
    private String recipient;
    private LocalDate expirationDate;
    private String link;
}
