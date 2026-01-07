// package com.exam.examserver.service.impl;

// import org.apache.catalina.User;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.stereotype.Service;

// import com.exam.examserver.repo.UserRepository;

// @Service
// public class UserDetailsServiceImpl implements UserDetailsService {

//     @Autowired
//     private UserRepository userRepository;

// @Override
// public UserDetails loadUserByUsername(String username)
//         throws UsernameNotFoundException {

//     User user = (User) userRepository.findByUsername(username)
//         .orElseThrow(() ->
//             new UsernameNotFoundException("User not found: " + username)
//         );

//     return org.springframework.security.core.userdetails.User
//             .withUsername(user.getUsername())
//             .password(user.getPassword())
//             .authorities("USER")
//             .build();
// }




// }
package com.exam.examserver.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import com.exam.examserver.model.User;
import com.exam.examserver.repo.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        User user = userRepository.findByUsername(username)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found: " + username)
                );

        return org.springframework.security.core.userdetails.User
                .withUsername(user.getUsername())
                .password(user.getPassword())
                .authorities("USER")
                .build();
    }
 // ✅ THIS IS THE IMPORTANT PART
    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
    
}
 