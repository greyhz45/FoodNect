package com.foodnect.services;

import com.foodnect.entities.User;
import com.foodnect.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

//UserService (CRUD) and UserDetailsService (UserDetails, get user from db)
@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    //first CRUD then loadUserByUsername
    public User saveUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }
    public List<User> findAllUsers(){
        return userRepo.findAll();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //required UserDetails but userRepo.findByUserName() returns single User entity
        User userLoaded = userRepo.findByUsername(username);
        if(userLoaded == null){
            throw new UsernameNotFoundException("Not found: " + username);
        } else {
            return
                new org.springframework.security.core.userdetails.User(
                        userLoaded.getUsername(),
                        userLoaded.getPassword(),
                        new ArrayList<>()
                );
        }
    }
}
