package com.exam.examserver.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.exam.examserver.model.Role;
import com.exam.examserver.model.User;
import com.exam.examserver.model.UserRoll;
import com.exam.examserver.repo.UserRepository;
import com.exam.examserver.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class Usercontroller {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    // **************************************************************
    // CREATE USER
    // **************************************************************
    @PostMapping("/")
    public ResponseEntity<?> createUser(@RequestBody User user) {

        // 1️⃣ Check if username already exists
        if (userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body("Username already exists");
        }

        // 2️⃣ Create default NORMAL role
        Set<UserRoll> roles = new HashSet<>();
        Role role = new Role(45L, "NORMAL");

        UserRoll userRole = new UserRoll();
        userRole.setUser(user);
        userRole.setRole(role);

        roles.add(userRole);

        // 3️⃣ Save user
        User savedUser = this.userService.createUser(user, roles);

        return ResponseEntity.ok(savedUser);
    }

    // **************************************************************
    // GET USER BY USERNAME
    // **************************************************************
    @GetMapping("/{username}")
    public ResponseEntity<?> getUser(@PathVariable("username") String username) {
        User user = this.userService.getUser(username);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("User not found");
        }

        return ResponseEntity.ok(user);
    }

    // **************************************************************
    // DELETE USER
    // **************************************************************
    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return ResponseEntity.ok("User deleted successfully");
    }

    // **************************************************************
    // CHECK USERNAME EXISTS
    // **************************************************************
    @GetMapping("/check-username/{username}")
    public ResponseEntity<?> checkUsername(@PathVariable String username) {
        boolean exists = userService.usernameExists(username);
        return ResponseEntity.ok(exists);
    }
}
