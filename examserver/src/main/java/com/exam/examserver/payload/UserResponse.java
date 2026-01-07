package com.exam.examserver.payload;

import java.util.Set;
import com.exam.examserver.model.Role;

public class UserResponse {

    private String username;
    private Set<Role> roles;

    public UserResponse(String username, Set<Role> roles) {
        this.username = username;
        this.roles = roles;
    }

    public String getUsername() {
        return username;
    }

    public Set<Role> getRoles() {
        return roles;
    }
}
