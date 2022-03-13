package com.foodnect.entities;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "user_tbl")
public class User {
    @Id
    @GeneratedValue
    private long userId;
    private String username;
    private String password;

    //not creating any roles so will use an empty ArrayList<>() whenever required
}
