package com.exam.examserver.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity

public class UserRoll {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userRoleId;

   @ManyToOne(fetch = FetchType.EAGER)
@JoinColumn(name = "user_id")
@JsonIgnore 
private User user;


    @ManyToOne(fetch = FetchType.EAGER)
    private Role role;

    // Inside UserRoll.java



    public UserRoll() {
        // Default constructor (required by Hibernate)
    }

    public Long getUserRoleId() {
        return userRoleId;
    }

    public void setUserRoleId(Long userRoleId) {
        this.userRoleId = userRoleId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public static void add(Role role1) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'add'");
    }

}
