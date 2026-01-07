package com.exam.examserver.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "roles")
public class Role {

    @Id
    private Long id;

    private String roleName;

    @OneToMany(
        cascade = CascadeType.ALL, 
        fetch = FetchType.EAGER, 
        mappedBy = "role"
    )
    private Set<UserRoll> userRoles = new HashSet<>();

    // ✅ REQUIRED by Hibernate — missing before!
    public Role() {}

    public Role(Long id, String roleName) {
        this.id = id;
        this.roleName = roleName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public Set<UserRoll> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<UserRoll> userRoles) {
        this.userRoles = userRoles;
    }
}
