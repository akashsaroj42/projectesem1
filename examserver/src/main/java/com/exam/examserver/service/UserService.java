package com.exam.examserver.service;

import java.util.Set;

import com.exam.examserver.model.User;
import com.exam.examserver.model.UserRoll;

public interface UserService {

    User createUser(User user, Set<UserRoll> userRoles);

    User getUser(String username);

    public void deleteUser(Long userId);

    boolean usernameExists(String username);

}


