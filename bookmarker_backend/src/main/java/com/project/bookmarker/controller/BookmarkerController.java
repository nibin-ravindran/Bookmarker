package com.project.bookmarker.controller;

import com.project.bookmarker.model.User;
import com.project.bookmarker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookmarkerController {

    @Autowired
    private UserRepository userRepository;

    @CrossOrigin
    @PostMapping("/addUser")
    public User addUser (@RequestBody User user) { return userRepository.save(user); }

}
