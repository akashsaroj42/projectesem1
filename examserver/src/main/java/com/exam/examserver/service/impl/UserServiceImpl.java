package com.exam.examserver.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.exam.examserver.model.Role;
import com.exam.examserver.model.User;
import com.exam.examserver.model.UserRoll;
import com.exam.examserver.repo.RoleRepository;
import com.exam.examserver.repo.UserRepository;
import com.exam.examserver.repo.UserRollRepository;
import com.exam.examserver.service.UserService;
@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRollRepository userRollRepository;

    @Override
    public User createUser(User user, Set<UserRoll> userRoles) {

        // ✅ Correct duplicate check
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new RuntimeException("User already present !!");
        }

        // ✅ Save roles properly
        for (UserRoll ur : userRoles) {

            Role role = ur.getRole();

            // Save role only if not exists
            roleRepository.findById(role.getId())
                .orElseGet(() -> roleRepository.save(role));

            ur.setUser(user);
        }

        user.getUserRoles().addAll(userRoles);

        return userRepository.save(user);
    }

    @Override
    public User getUser(String username) {

        // ✅ Correct Optional handling
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public void deleteUser(Long userId) {

        // Delete roles first
        userRollRepository.deleteAllByUserId(userId);

        // Then delete user
        userRepository.deleteById(userId);
    }

    @Override
    public boolean usernameExists(String username) {
        return userRepository.existsByUsername(username);
    }
}
